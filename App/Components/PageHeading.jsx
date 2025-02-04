import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'

export default function PageHeading({title,color}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,
        alignItems:'center'}}
        onPress={()=>navigation.goBack()}
        >
        <Ionicons name="arrow-back-outline" size={30} color={color} />
        <Text style={{fontSize:25,fontFamily:'outfit-medium',color}}>
            {title}</Text>
    </TouchableOpacity>
  )
}