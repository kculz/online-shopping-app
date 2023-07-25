import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Profile } from '../screens';
import { Ionicons  } from '@expo/vector-icons';
import { COLORS } from '../constants/index'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='Home'
        component={Home} 
        options={{ tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused? "home": "home-outline"}
            size={20}
            color={focused? COLORS.darkgray: COLORS.gray }
            />
        }}}
      />
      <Tab.Screen 
        name='Search' 
        component={Search} 
        options={{ tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={"search-sharp"}
            size={20}
            color={focused? COLORS.darkgray: COLORS.gray }
            />
        }}}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{ tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused? "person": "person-outline"}
            size={20}
            color={focused? COLORS.darkgray: COLORS.gray }
            />
        }}}
      />
    </Tab.Navigator>
  )
}

export default BottomTab;

const styles = StyleSheet.create({});