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
        marginHorizontal: SIZES.smartWidthScale(20),
        marginVertical: SIZES.smartScale(20)
    },
    separator: {
        backgroundColor: COLORS.white,
        height: 1,
        marginVertical: SIZES.smartScale(5)
    },
    addContainer: {
        backgroundColor: COLORS.corn_flower,
        height: SIZES.smartWidthScale(70),
        width: SIZES.smartWidthScale(70),
        borderRadius: SIZES.countPixelRatio(50),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 999,
        marginBottom: SIZES.smartScale(20),
        marginRight: SIZES.smartScale(20),
    },
    plus: {
        color: COLORS.white,
        fontSize: SIZES.countPixelRatio(45),
    },
    centerConatainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tryAgain: {
        color: COLORS.black,
        fontSize: SIZES.countPixelRatio(12),
        fontFamily: FONTS.SEMI_BOLD
    },
    loaderContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;