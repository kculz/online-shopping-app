import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.md,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    headerTitle: {
        fontFamily: "semiBold",
        fontSize: SIZES.xl,
         
    }
})
