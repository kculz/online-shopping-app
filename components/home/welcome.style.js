import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeTxt: (color,top) =>  ({
        fontFamily: "bold",
        fontSize: SIZES.xxl -5,
        marginTop: top,
        marginLeft:SIZES.xs,
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.md,
        marginVertical: SIZES.md,
        margin: SIZES.sm,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.dimgray
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.sm,
        borderRadius: SIZES.sm
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.sm,

    },
    searchBtn:{
        width: 50,
        height: "100%",
        borderRadius: SIZES.md,
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        color: COLORS.gray,
        paddingRight: 10
    }
});