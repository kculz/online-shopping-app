import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './home.style';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { Welcome } from '../components';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Mutare</Text>
          </View>



          <View style={{ alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>
                2
              </Text>
              <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    <ScrollView>
      <Welcome />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home
