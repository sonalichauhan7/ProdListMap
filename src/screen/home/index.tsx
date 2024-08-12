import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import axios from "axios";
import { BASE_URL } from '../../utils';
import { COLORS } from '../../theme';
import ProductItem from '../../component/productItem';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Routes } from '../../navigation/route';
import TotalPrice from '../../component/totalPrice';
import Loader from '../../component/loader';

interface IProductList {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

function Home(): JSX.Element {
    const navigation = useNavigation<NavigationProp<any, any>>();
    const [isLoading, SetLoading] = useState<boolean>(false);
    const [productList, SetProductList] = useState<IProductList[]>([]);
    const [openItemId, setOpenItemId] = useState<number | null>(null);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        SetLoading(true)
        axios.get(BASE_URL.GET_PRODUCT_URL)
            .then((result: any) => {
                // console.log("RESULT====>", result.data)
                SetProductList(result.data);
                SetLoading(false);
            })
            .catch((err: any) => {
                console.log("ERRROR====>", err);
                SetLoading(false);
            })
    }, [])

    useEffect(() => {
        let totalPrice = productList.reduce((acc, item) => acc + item.price, 0)
        setTotalPrice(totalPrice)
    }, [productList])

    const handleItemPress = (id: number) => {
        setOpenItemId(openItemId === id ? null : id)
    }

    const navigateToMap = () => {
        navigation.navigate(Routes.Map)
    }

    const renderProductList = ({ item, index }: { item: IProductList, index: number }) => {
        return (
            <ProductItem
                item={item}
                index={index}
                onItemClick={handleItemPress}
                openItemId={openItemId}
                handleItemDetails={navigateToMap} />
        )
    }

    const renderSeparator = () => <View style={styles.separator} />

    const renderAddButton = () => {
        return (
            <TouchableOpacity style={styles.addContainer} activeOpacity={0.9} onPress={handleAddProduct}>
                <Text style={styles.plus}>{"+"}</Text>
            </TouchableOpacity>
        )
    }

    const handleAddProduct = () => {
        navigation.navigate(Routes.AddProduct)
    }

    return (
        <SafeAreaView
            style={styles.saContainer}
            forceInset={{ top: 'always', bottom: 'never' }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={COLORS.white}
                translucent={true}
            />
            <View style={styles.container}>
                {!isLoading ? <TotalPrice price={totalPrice.toFixed(2) + " ₹"} /> : null}
                <FlatList
                    data={productList}
                    renderItem={renderProductList}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderSeparator}
                />
                {!isLoading ? renderAddButton() : null}
                <Loader isLoading={isLoading} />
            </View>
        </SafeAreaView>
    );
}

export default Home;