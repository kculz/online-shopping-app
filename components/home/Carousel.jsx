import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { styles } from './welcome.style';
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://galeria.co.za/cdn/shop/products/AmazoniaRecliningSofaSetWithStorage.jpg?v=1681297238&width=713",
        "https://galeria.co.za/cdn/shop/files/DennisTwo-ToneLeatherCornerSofa.jpg?v=1689575379&width=713",
        "https://galeria.co.za/cdn/shop/files/DennisTwo-ToneLeatherCornerSofa.jpg?v=1689575379&width=713"
    ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
      images={slides} 
      dotColor={COLORS.primary} 
      inactiveDot={COLORS.tertiary}
      ImageComponentStyle={{ borderRadius: 15, width: "90%", marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel

