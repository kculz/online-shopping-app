import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { Ionicons } from '@expo/vector-icons'

const ProductDetails = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{flex:1}} >
            <Ionicons name='chevron-back-circle' size={30} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='heart' size={30} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  upperRow: {
    marginHorizontal:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxl,
    // width: SIZES.xxl,
    zIndex:999
  }
})