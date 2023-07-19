import React from 'react'
import { View,TextInput,TouchableOpacity,Text, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AirbnbRating } from '@rneui/base';
 

const Form = () => {
  return (
    <SafeAreaProvider>
      <AirbnbRating/>

    </SafeAreaProvider>
  )
}
export default Form 