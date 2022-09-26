import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import {COLORS, SIZES, FONTS, SHADOWS} from '../constants'

export const CircleButton = ({
  imgUrl,hanldePress, ...props
}) => {
  return (
    <TouchableOpacity
    style={{
      width:40,
      height:40,
      position:'absolute',

      backgroundColor:COLORS.white,
      borderRadius:SIZES.extraLarge,
      alignItems:'center',
      justifyContent:'center',
      ...SHADOWS.light,
      ...props,
      
    }}

    onPress={hanldePress}
    
    >

      <Image 
           
           source={
            imgUrl
           }
           resizeMode='contain'
           style={{
            windth:24,
            height:24
           }}
      />
    </TouchableOpacity>
  )
}

export const ReactButton = ({
  handlePress,fontSize,minWidth, ...props

}) => {
    return (
      <TouchableOpacity
      style={{
       
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.extraLarge,
       minWidth:minWidth,
       padding:SIZES.small,
        ...props,
        
      }}
  
      onPress={handlePress}
      
      >

        <Text
        style={{
          fontFamily:FONTS.semiBold,
          fontSize:fontSize,
          color:COLORS.white,
          textAlign:'center'
        }}
        >
          Place a bid
        </Text>

      </TouchableOpacity>
    )
  }