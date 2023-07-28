import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"
import { width } from "../constants/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary 
  },

  upperRow: {
    marginHorizontal:20,
    flexDirection: "row", width: width -44, alignItems: "center", justifyContent: "space-between",
    position: "absolute",
    top: SIZES.xxl,
    zIndex:999
  },
  image: {
     aspectRatio:1,
     resizeMode: "cover"
  },
  details: {
    marginTop: - SIZES.lg,
    backgroundColor: COLORS.secondary,
    width: width,
    borderTopLeftRadius: SIZES.md,
    borderTopRightRadius: SIZES.md,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.sm,
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     width: width - 44,
     top: 20
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.lg
  },
  priceWrapper: {
    padding:10,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.lg,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.lg
  }
})