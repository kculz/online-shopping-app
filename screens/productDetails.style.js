import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"
import { width } from "../constants/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary 
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
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.lg,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.lg
  },
  ratingRow: {
    marginHorizontal: SIZES.lg,
    paddingBottom: SIZES.sm,
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     width: width - 10,
     top: 5
  },
  rating: {
    top: SIZES.lg, 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center" 
  },
  ratingText: {
    fontFamily: "light",
    color: COLORS.offwhite
  },
  counter: {
    top: SIZES.lg, 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 44
  },
  counterText: {
    fontFamily: "bold",
    fontSize: SIZES.xl
  },
  descWrapper: {
    marginTop: SIZES.lg * 2,
    marginHorizontal: SIZES.lg,
     
  },
  desc: {
    fontFamily: "semibold",
    fontSize: SIZES.xl
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.lg,
    textAlign: "justify",
    marginBottom: SIZES.sm
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: SIZES.sm - 5,
    borderRadius: SIZES.lg,
    marginHorizontal: SIZES.lg
  },
  cartRow: {
    marginHorizontal: SIZES.xl,
    paddingBottom: SIZES.sm,
    paddingTop: SIZES.lg,
    gap: SIZES.xxl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width - 44,
  },
  btn: {
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.lg,
    padding: SIZES.sm,
    width: 140
  }
   
})