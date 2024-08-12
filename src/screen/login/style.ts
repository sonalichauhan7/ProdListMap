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
    vContactNumber: {
        flexDirection: 'row',
        borderRadius: SIZES.countPixelRatio(10),
        alignItems: 'center',
        backgroundColor: COLORS.white_one,
        width: "100%",
    },
    tInput: {
        paddingVertical: SIZES.countPixelRatio(20),
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.MEDIUM,
        color: COLORS.black,
    },
    error: {
        paddingVertical: SIZES.countPixelRatio(10),
        fontSize: SIZES.countPixelRatio(16),
        fontFamily: FONTS.REGULAR,
        color: COLORS.red,
    }
})

export default styles;