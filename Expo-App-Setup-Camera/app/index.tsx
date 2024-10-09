import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import {CameraView} from 'expo-camera'
const index = () => {
  return (
    <View style={className`flex-1 bg-gray-700`}>
      <CameraView style={className`flex-1`}>

      </CameraView>
    </View>
  )
}

export default index