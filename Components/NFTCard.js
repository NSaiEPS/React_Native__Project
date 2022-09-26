import { View, Image, Text } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { COLORS,SIZES,SHADOWS,assets } from '../constants'


import {CircleButton} from './'
import {SubInfo,EthPrice,NFTTitle } from './SubInfo'
import { ReactButton } from './Botton'
// import { Navigation } from 'react-native-navigation'





const NFTCard = ({data}) => {
  // console.log(data.image)

  let navigation=useNavigation()
  return (
    <View
    style={{
      backgroundColor:COLORS.white,
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark
    }}
    >

<View
style={{
  width:'100%',
  height:250
}}
>

  <Image 
  
  source={
    
      data.image
    
  }
  resizeMode='cover'
  style={{
    width:'100%',
    height:'100%',
    borderTopLeftRadius:SIZES.font,
    borderTopRightRadius:SIZES.font
  }}
  />


   <CircleButton 
   imgUrl={assets.heart}
   right={10}
   top={3}
   />

</View>
<SubInfo/>

<View
style={{
  width:'100%',
  padding:SIZES.font
}}
>

  <NFTTitle
  title={data.name}
  subTitle={data.creator}
  titleSIze={SIZES.large}
  subTitleSize={SIZES.small}
  
  />


<View

style={{
  marginTop:SIZES.font,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'

}}
>

  <EthPrice 
  
  price={data.price}
  />
  <ReactButton
  minWidth={120}
  fontSize={SIZES.font}

  handlePress={()=>
  navigation.navigate("Details",{data})
  }
  
  />

</View>

</View>

    </View>
  )
}

export default NFTCard