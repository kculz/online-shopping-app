import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';


const ProductRow = () => {
    const {data, isLoading, err} = useFetch()
    const products = [1,2,3,4,5];
  return (
    <View style={{ marginTop: SIZES.md, justifyContent: "center", alignItems: "center"}}>
        { isLoading ? (
          <ActivityIndicator size={SIZES.xxl} color={COLORS.primary} /> 
        ): err ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList 
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item}) => <ProductCardView item={item } />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.xs}}
        />
        )}
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})