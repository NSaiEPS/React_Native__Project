import { View, Text, Image } from 'react-native'

import { COLORS,FONTS,SIZES,assets } from '../constants'
import asset from '../constants/asset'

const HomeHeader = () => {
  return (
    <View
    style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}
    >


<View
style={{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
}}
>

  <Image 
  resizeMode='contain'
  source={asset.logo}
  style={{
    width:90,
    height:90
  }}
  />

  <View
  style={{
    width:45,
    height:45

  }}
  >

    <Image 
    source={
      asset.person01  }

    resizeMode='contain'

    style={{
      width:'100%',
      height:'100%'
    }}
    
    />

<Image 
    source={
      asset.badge  }

    resizeMode='contain'

    style={{
    position:'absolute',
    width:15,
    height:15,
    right:0,
    bottom:0
    }}
    
    />




  </View>



</View>

   
<View
style={{
  marginVertical:SIZES.font
}}
>

  <Text
  style={{
    fontFamily:FONTS.regular,
    fontSize:SIZES.small,
    color:COLORS.white

  }}
  
  >

    Hello , victoria

  </Text>

</View>
    </View>
  )
}

export default HomeHeader
