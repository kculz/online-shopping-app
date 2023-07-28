import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './productDetails.style'

const ProductDetails = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.primary}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='heart' size={30} color={COLORS.primary}/>
          </TouchableOpacity>
        </View>

        <Image 
          source={ {uri: "https://galeria.co.za/cdn/shop/products/AmazoniaRecliningSofaSetWithStorage.jpg?v=1681297238&width=713"}}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Lorem, ipsum.</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$200</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

export default ProductDetails

