import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    loadingTxt: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(14),
        fontFamily: FONTS.SEMI_BOLD,
        textAlign: "center"
    }
})

export default styles;