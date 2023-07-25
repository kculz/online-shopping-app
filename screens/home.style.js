import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/index";


export const styles = StyleSheet.create({
    //Text styles

    headingStyle: {
        fontFamily: "bold",
        fontSize: 25
    },
    textStyle: {
        fontFamily: "regular",
        fontSize: 15
    },
    subHeadingStyle: {
        fontFamily: "bold",
        fontSize: 20
    },
    subTextStyle: {
        fontFamily: "light ",
        fontSize: 13
    },

    // app bar wrapper
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.sm
    },

    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    //header
    location: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: "absolute",
        bottom: 0,
        width: 36,
        height: 35,
        borderRadius: 70,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber:{
        fontFamily: "bold",
        fontWeight: 600,
        fontSize: 13,
        color: "white",
        paddingTop: 10
    },






});
