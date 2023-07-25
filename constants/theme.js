import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "#2B7A0B",
    secondary: "#7DCE13",
    tertiary: "#EAE509",
    gray: "#9DB2BF",
    dimgray: "#526D82",
    darkgray: "#27374D",


    offwhite: "#F7F7F7",
    lightwhite: "",
    white: "",
    black: "#000",
    red: "",
    green: "",
}

const SIZES = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 44,
}

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffSet: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffSet: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, SIZES, SHADOWS };