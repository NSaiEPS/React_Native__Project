import { Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Details from './screens/Details';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  const Stack =createNativeStackNavigator()
  
  const theme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:'transparent'
    }
  }
  
  
//   const [loaded]=useFonts({
//     InterBold:require("./assets/fonts/Inter-Bold.ttf"),
//     InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
//     InterSemiMedium:require("./assets/fonts/Inter-SemiMedium.ttf"),
//     InterRegular:require("./assets/fonts/Inter-Regular.ttf"),
//     InterLight:require("./assets/fonts/Inter-Light.ttf")

//   })
  
// if(!loaded) return null

  return (


 

<NavigationContainer

theme={theme}
>

      

      <SafeAreaProvider>
      
  {/* <MainContainer/> */}

  <Stack.Navigator
  screenOptions={{
    headerShown:false
  }

  }
  initialRouteName='HomeScreen'
  >
  <Stack.Screen
    name="HomeScreen"
    component={HomeScreen}
    // options={{ title: 'Awesome app' }}
    options={{ headerShown: false }}
  />

<Stack.Screen
    name="Details"
    component={Details}
    options={{ headerShown: false }}
  />

</Stack.Navigator>

    
    </SafeAreaProvider>
    
    </NavigationContainer>

   
  );
}
