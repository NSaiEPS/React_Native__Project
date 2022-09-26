import { View, Text ,StatusBar} from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'


const FocussedStatus = (props) => {

  const isFocused=useIsFocused()

  return isFocused? <StatusBar 
  animated={true}
  {...props}
  
  
  />:null
  
  // (


  //   <View>
  //     <Text>FocussedStatus</Text>
  //   </View>
  // )
}

export default FocussedStatus