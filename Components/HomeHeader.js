import { View, Text, Image, TextInput } from 'react-native'

import { COLORS,FONTS,SIZES,assets } from '../constants'
import asset from '../constants/asset'

const HomeHeader = ({onSearch}) => {
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

    Hello , victoria 👏

  </Text>

  <Text
  style={{
    fontFamily:FONTS.bold,
    fontSize:SIZES.large,
    color:COLORS.white,
    marginTop:SIZES.base/2

  }}
  
  >

Let's find a masterpiece

  </Text>

</View>

  <View
  style={{
    marginTop:SIZES.font
  }}
  >

    <View
    
    style={{
      width:'100%',
      borderRadius:SIZES.font,
      backgroundColor:COLORS.gray,
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:SIZES.font,
      paddingVertical:SIZES.small-2
    }}
    >

    <Image 
    source={
      asset.search
    }
    resizeMode='center'
    style={{
      width:20,
      height:20,
      marginRight:SIZES.base
    }}
    
    />

    <TextInput 
    placeholder='Search NFTs'
    style={{
      flex:1
    }}
    onChangeText={onSearch}
    
    />
</View>
  </View>

    </View>
  )
}

export default HomeHeader

