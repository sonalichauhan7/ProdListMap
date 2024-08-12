import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme';
import { STRING } from '../utils';

function TotalPrice({ price }: { price: string }): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={[styles.price, { fontFamily: FONTS.SEMI_BOLD }]}>{STRING.totalPrice.total_price}</Text>
            <Text style={[styles.price, { fontFamily: FONTS.MEDIUM }]}>{price}</Text>
        </View>
    );
}

export default TotalPrice;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.corn_flower,
        padding: SIZES.smartScale(15),
        width: "100%",
        borderRadius: SIZES.countPixelRatio(15),
        marginBottom: SIZES.smartScale(20),
    },
    price: {
        color: COLORS.white,
        fontSize: SIZES.countPixelRatio(16),
        lineHeight: SIZES.smartScale(16),
    }
})