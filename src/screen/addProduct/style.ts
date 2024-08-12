import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        margin: SIZES.smartScale(20),
    },
    tInfo: {
        fontSize: SIZES.countPixelRatio(19),
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.black_one,
        marginVertical: SIZES.smartScale(20),
        lineHeight: SIZES.countPixelRatio(30),
    },
    label: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.SEMI_BOLD,
        marginVertical: SIZES.smartScale(10),
    },
    tInput: {
        paddingVertical: SIZES.countPixelRatio(20),
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.MEDIUM,
        color: COLORS.black,
        backgroundColor: COLORS.white_one,
        borderRadius: SIZES.countPixelRatio(10),
        paddingHorizontal: SIZES.smartWidthScale(20)
    },
    textArea: {
        height: SIZES.smartScale(150),
    },
    error: {
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.REGULAR,
        color: COLORS.red,
        marginTop: SIZES.smartScale(5),
    }
})

export default styles;