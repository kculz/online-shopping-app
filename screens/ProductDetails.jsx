import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
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
            <Ionicons name='heart' size={30} color="red"/>
          </TouchableOpacity>
        </View>

        <Image 
          source={ {uri: "https://galeria.co.za/cdn/shop/products/AmazoniaRecliningSofaSetWithStorage.jpg?v=1681297238&width=713"}}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Product Name</Text>
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

          <View style={{ marginBotton: SIZES.sm}}>
            <View style={styles.location}>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Ionicons name='location' size={20}/>
                <Text>Mutare</Text>
              </View>

              <View style={{flexDirection: "row", alignItems: "center"}}>
                <MaterialCommunityIcons name='truck-delivery-outline' size={24}/>
                <Text>  Free delivery</Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
                <Text style={{textAlign: "center", fontSize: SIZES.lg}}>Buy now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
                <Text style={{textAlign: "center", fontSize: SIZES.lg}}>Add to cart</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
  )
}

export default ProductDetails

