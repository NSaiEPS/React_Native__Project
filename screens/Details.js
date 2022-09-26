import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

 import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
 import {CircleButton,ReactButton, SubInfo, FocussedStatus, DetailsDesc, DetailsBid} from '../Components'


const DetailsHeader=({data, navigation})=>{

return(
  <View
  style={{
    width:'100%',
    height:373
  }}
  >

  <Image 
  source={
    data.image
  }
  resizeMode='cover'
  style={{
    width:'100%',
    height:'100%'
  }}
  
  />

  <CircleButton
  imgUrl={assets.left}
  hanldePress={()=>navigation.goBack()}
  left={15}
  top={
    StatusBar.currentHeight+10
  }
  />

<CircleButton
  imgUrl={assets.heart}
  right={15}
  top={
    StatusBar.currentHeight+10
  }
  />
<Text>duhk</Text>

  </View>
)
}

const Details = ({route, navigation}) => {
  // console.log(route,navigation)

  const {data} =route.params;

  return (
  <SafeAreaView
  style={{
    flex:1
  }}
  >
    <FocussedStatus 
    barStyle='dark-content'
    backgroundColor='transparent'
    translucent={true}
    
    />

    <View
    style={{
      width:'100%',
      position:'absolute',
      bottom:0,
      paddingVertical:SIZES.font,
      justifyContent:'center',
      backgroundColor:'rgba(255,255,255,0.5)',
      zIndex:1
    }}
    >
      <ReactButton 
      minWidth={170}
      fontSize={SIZES.large}
      {...SHADOWS.dark}
      
      />
    </View>


  <FlatList 
  data={data.bids}
  renderItem={({item})=>

<DetailsBid 
bid={item}/>
}
keyExtractor={(item)=>item.id}
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  paddingBottom:SIZES.extraLarge*3
}}
  ListHeaderComponent={
    (
      <React.Fragment>
      

    <DetailsHeader
    data={
data

    }
    navigation={navigation}
    
    />

    <SubInfo />

    <View
    style={{
      padding:SIZES.font,

    }}
    >

      <DetailsDesc 
      data={data}
      
      />

    </View>
    </React.Fragment>





    )


  }
  />

  </SafeAreaView>
  )
}

export default Details
