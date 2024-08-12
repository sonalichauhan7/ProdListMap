import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../theme';

interface IProps {
    title: string;
    onPress: () => void;
}

function ThemeButton({ title, onPress }: IProps): JSX.Element {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.vButton}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ThemeButton;

const styles = StyleSheet.create({
    vButton: {
        width: '100%',
        backgroundColor: COLORS.corn_flower,
        borderRadius: SIZES.countPixelRatio(10),
        paddingVertical: SIZES.countPixelRatio(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.smartScale(30)
    },
    title: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: SIZES.countPixelRatio(17),
        color: COLORS.white,
    },
});