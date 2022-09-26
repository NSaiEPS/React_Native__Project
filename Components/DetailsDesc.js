import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'

import { COLORS, SIZES, FONTS } from '../constants'

export const DetailsDesc = ({data}) => {

  const [text, settext] = useState(data.description.splice(0,100))
  const [readeMore, setreadeMore] = useState(false)
  return (
    <>
    <View
    style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center'

    }}
    >
      <NFTTitle
        title={data.name}
        subTitle={data.creator}
        titleSIze={SIZES.extraLarge}
        subTitleSize={SIZES.font}
      />

      <EthPrice 
      
      price={data.price}
      
      />
    </View>

    <View
    style={{
      marginVertical:SIZES.extraLarge *1.5
    }}
    >

      <Text
      style={{
        fontSize:SIZES.font,
        fontFamily:FONTS.semiBold,
        color:COLORS.primary

      }}
      >
        Description

      </Text>

      <View
      style={{

        marginTop:SIZES.base
      }}
      >
 <Text
      style={{
        fontSize:SIZES.small,
        fontFamily:FONTS.regular,
        color:COLORS.secondary,
        lineHeight:SIZES.large

      }}
      >
        {text}
        {!readeMore && '...'}
        <Text
         style={{
          fontSize:SIZES.small,
          fontFamily:FONTS.semiBold,
          color:COLORS.primary,
  
        }}
        >
        
        {readeMore ? 'Show Less':  'Read More'}
          
        </Text>



        {/* {data.description} */}

      </Text>
      
      </View>

    </View>
    </>
  )
}

// export default DetailsDesc