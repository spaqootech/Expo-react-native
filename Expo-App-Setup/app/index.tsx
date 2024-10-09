import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
const index = () => {
  return (
    <View style={className`flex-1 justify-center items-center bg-gray-700`}>
      <Text style={className`text-5xl text-white`}>Hello World</Text>
    </View>
  )
}

export default index