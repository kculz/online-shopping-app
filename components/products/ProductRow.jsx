import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';


const ProductRow = () => {
    const products = [1,2,3,4,5];
  return (
    <View style={{ marginTop: SIZES.md, justifyContent: "center", alignItems: "center"}}>
        <FlatList 
            data={products}
            renderItem={({item}) => <ProductCardView />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.xs}}
        />
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})