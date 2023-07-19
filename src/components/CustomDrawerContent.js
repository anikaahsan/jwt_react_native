import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 const CustomDrawerContent = ({navigation}) => {
    // const navigation=useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
           <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('settings')}>
           <Text>Settings</Text>
        </TouchableOpacity>
    </View>
  )
}
export default CustomDrawerContent
