import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation  } from '@react-navigation/native';

const Welcome = () => {

    const navigation = useNavigation();
    
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xs)}>Find The Most</Text>
            <Text style={styles.welcomeTxt(COLORS.primary,0)}>Luxurious furniture</Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon} /> 
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput 
                    style={styles.searchInput}
                    value=''
                    onPressIn={() => navigation.navigate("Search")}
                    placeholder='What are you looking for'
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='return-down-back-outline' size={SIZES.xxl} color={COLORS.dimgray}/>
                </TouchableOpacity>
            </View>
        </View>

       
    </View>
  )
}

export default Welcome

