import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
    const navigation = useNavigation();
  return (
   <TouchableOpacity onPress={ () => navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: "https://galeria.co.za/cdn/shop/files/DennisTwo-ToneLeatherCornerSofa.jpg?v=1689575379&width=713"}}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
                <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
            </View>

            <TouchableOpacity style={styles.addBtn} >
                <Ionicons name='add-circle' size={35} color={COLORS.tertiary} />
            </TouchableOpacity>
        </View>
   </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({
    container: {
        width:182,
        height: 200,
        marginEnd: 22,
        borderRadius: SIZES.md,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.sm/2,
        marginTop: SIZES.sm/2,
        borderRadius: SIZES.sm,
        overflow: "hidden",

    },
    image: {
        aspectRatio:1,
        resizeMode: "cover"
    },
    details: {
        padding: SIZES.sm,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.lg,
        marginBottom:2
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.sm,
        marginBottom:2,
        color: COLORS.darkgray
    },
    price: {
        fontFamily: "light",
        fontSize: SIZES.md,
        marginBottom:2,
        color: COLORS.offwhite

    },
    addBtn: {
        position: "absolute",
        bottom: SIZES.sm,
        right: SIZES.xs
    }
})