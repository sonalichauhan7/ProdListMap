import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme';
import { STRING } from '../utils';

interface IProductList {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface IProductItemProps {
    item: IProductList;
    index: number;
    onItemClick: (id: number) => void;
    openItemId: number | null;
    handleItemDetails: () => void;
}

function ProductItem({ item, index, onItemClick, openItemId, handleItemDetails }: IProductItemProps): JSX.Element {

    const isExpand = item.id === openItemId;

    const renderDetails = (key: string, value: string | number, symbole?: string) => {
        return (
            <View style={{ flexDirection: "row", paddingRight: SIZES.smartWidthScale(80) }}>
                <Text style={styles.key}>{key}</Text><Text style={styles.value}>{value}{symbole ? symbole : null}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity onPress={() => onItemClick(item.id)} activeOpacity={0.9}
            style={[styles.container, isExpand ? { maxHeight: SIZES.smartScale(600) } : { height: SIZES.smartScale(50), }]}>
            <Text style={styles.title} numberOfLines={isExpand ? 0 : 1} ellipsizeMode={"tail"}>{item.title}</Text>
            {isExpand ?
                <TouchableOpacity onPress={handleItemDetails} activeOpacity={0.9}>
                    {renderDetails(STRING.productList.price, item.price, "₹")}
                    {renderDetails(STRING.productList.category, item.category)}
                    {renderDetails(STRING.productList.description, item.description)}
                </TouchableOpacity> : null}
        </TouchableOpacity>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light_grey,
        padding: SIZES.smartScale(10),
        width: "100%",
        borderRadius: SIZES.countPixelRatio(15)
    },
    expandContainer: {
        flex: 1,
        backgroundColor: COLORS.light_grey,
        padding: SIZES.smartScale(10),
        borderRadius: SIZES.countPixelRatio(15)
    },
    title: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.SEMI_BOLD,
        lineHeight: SIZES.smartScale(18),
    },
    key: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(14),
        fontFamily: FONTS.SEMI_BOLD,
        lineHeight: SIZES.smartScale(16),
    },
    value: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(14),
        fontFamily: FONTS.MEDIUM,
        lineHeight: SIZES.smartScale(16),
    }
})