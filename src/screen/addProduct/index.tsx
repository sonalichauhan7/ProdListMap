import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, ScrollView, Alert } from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS } from '../../theme';
import { BASE_URL, STRING } from '../../utils';
import ThemeButton from '../../component/button/theme_button';
import axios from "axios";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loader from '../../component/loader';

interface IProduct {
    title: string;
    description: string;
    category: string;
    price: string;
}

function AddProduct(): React.JSX.Element {
    const navigation = useNavigation<NavigationProp<any, any>>();
    const [isLoading, SetLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<IProduct>({
        title: "",
        description: "",
        category: "",
        price: "",
    })
    const [error, setError] = useState<IProduct>({
        title: "",
        description: "",
        category: "",
        price: "",
    })

    const handleInputChange = (key: string, value: string) => {
        setProduct({ ...product, [key]: value });
        setError({ ...error, [key]: "" })
    };

    const isValid = () => {
        let valid = true;
        let errors: IProduct = { title: "", description: "", category: "", price: "" };

        if (!product.title.trim()) {
            errors.title = STRING.addProduct.title_error;
            valid = false;
        }
        if (!product.description.trim()) {
            errors.description = STRING.addProduct.desc_error;
            valid = false;
        }
        if (!product.category.trim()) {
            errors.category = STRING.addProduct.category_error;
            valid = false;
        }
        if (!product.price.trim() || isNaN(Number(product.price))) {
            errors.price = STRING.addProduct.price_error;
            valid = false;
        }

        setError(errors);
        return valid;
    };

    const handleAddProduct = () => {
        if (isValid()) {
            SetLoading(true);
            let data = {
                title: product.title,
                price: Number(product.price),
                description: product.description,
                image: 'https://i.pravatar.cc',
                category: product.category
            }
            axios.post(BASE_URL.GET_PRODUCT_URL, data)
                .then(response => {
                    console.log("add product response====>", response)
                    if (response.data) {
                        SetLoading(false);
                        showAlert();
                    }
                })
                .catch(error => {
                    SetLoading(false);
                    showFailureAlert();
                    console.log("catch block====>", error)
                });
        }
    }

    const showAlert = () => {
        Alert.alert(
            STRING.addProduct.success,
            STRING.addProduct.added_success,
            [
                { text: 'OK', onPress: () => navigation.goBack() },
            ],
            { cancelable: true }
        );
    }

    const showFailureAlert = () => {
        Alert.alert(
            STRING.addProduct.sorry,
            STRING.productList.try_again,
            [
                { text: 'OK', onPress: () => navigation.goBack() },
            ],
            { cancelable: true }
        );
    }

    const renderLabel = (title: string) => <Text style={styles.label}>{title}</Text>

    const renderError = (title: string) => <Text style={styles.error}>{title}</Text>

    return (
        <SafeAreaView
            style={styles.saContainer}
            forceInset={{ top: 'always', bottom: 'never' }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={COLORS.white}
                translucent={true}
            />
            <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={styles.tInfo}>{STRING.addProduct.add_info}</Text>
                <View style={{ flex: 1 }}>
                    {renderLabel(STRING.addProduct.title)}
                    <TextInput
                        placeholder={STRING.addProduct.title_placeholder}
                        placeholderTextColor={COLORS.placeholder_grey}
                        value={product.title}
                        onChangeText={(text) => handleInputChange("title", text)}
                        style={styles.tInput}
                        maxLength={20}
                    />
                    {error.title ? renderError(error.title) : null}

                    {renderLabel(STRING.addProduct.description)}
                    <TextInput
                        placeholder={STRING.addProduct.desc_placeholder}
                        placeholderTextColor={COLORS.placeholder_grey}
                        value={product.description}
                        onChangeText={(text) => handleInputChange("description", text)}
                        style={[styles.tInput, styles.textArea]}
                        maxLength={150}
                        multiline={true}
                        textAlignVertical={"top"}
                    />
                    {error.description ? renderError(error.description) : null}

                    {renderLabel(STRING.addProduct.category)}
                    <TextInput
                        placeholder={STRING.addProduct.category_placeholder}
                        placeholderTextColor={COLORS.placeholder_grey}
                        value={product.category}
                        onChangeText={(text) => handleInputChange("category", text)}
                        style={styles.tInput}
                        maxLength={20}
                    />
                    {error.category ? renderError(error.category) : null}

                    {renderLabel(STRING.addProduct.price)}
                    <TextInput
                        placeholder={STRING.addProduct.price_placeholder}
                        placeholderTextColor={COLORS.placeholder_grey}
                        value={product.price}
                        onChangeText={(text) => handleInputChange("price", text)}
                        style={styles.tInput}
                        keyboardType={"numeric"}
                    />
                    {error.price ? renderError(error.price) : null}

                    <ThemeButton title={STRING.addProduct.add} onPress={handleAddProduct} />
                </View>
                <Loader isLoading={isLoading} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

export default AddProduct;