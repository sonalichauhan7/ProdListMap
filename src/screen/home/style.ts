import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

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
    }
})

export default styles;