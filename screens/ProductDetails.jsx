import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { styles } from './productDetails.style'

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 1){
      setCount(count - 1);
    }
  };

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

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
               {[1,2,3,4,5].map((index) => (
                <Ionicons name='star' key={index} size={20 } color="gold" />
               ))}
               <Text style={styles.ratingText}>  (4.9)</Text>
            </View>

            <View style={styles.counter}>
               <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name='plus' size={34} />
               </TouchableOpacity>
               <Text style={styles.counterText}>  {count}  </Text>

               <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name='minus' size={34} />
               </TouchableOpacity>
            </View>

          </View>

          <View style={styles.descWrapper}>
            <Text style={styles.desc}>Description</Text>
            <Text style={styles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, unde. Fugiat at magni dolore rem?</Text>
          </View>

        </View>
      </View>
  )
}

export default ProductDetails

