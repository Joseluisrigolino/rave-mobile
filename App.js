// App.js
import React from 'react';
import LoginScreen from './screens/startAplicationScreens/LoginScreen';
import HomeScreen from './screens/mainAplicationScreens/HomeScreen';
import EventScreen from './screens/mainAplicationScreens/EventScreen';
import AddEventScreen from './screens/mainAplicationScreens/AddEventScreen';
import { View } from 'react-native-web';
//importar register nav
import RegisterAccountScreen from './screens/startAplicationScreens/registerScreens/RegisterAccountScreen';
import RegisterAccountCodeScreen from './screens/startAplicationScreens/registerScreens/RegisterAccountCodeScreen';
//importar restore nav
import RestoreAccountScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountScreen";
import RestoreAccountCodeScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountCodeScreen";
import RestoreAccountCodePosScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountCodePosScreen";
import NewsScreen from './screens/mainAplicationScreens/NewsScreen';
//importar libreria de navegacion

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (

     /* <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterAccountScreen" component={RegisterAccountScreen} />
        <Stack.Screen name="RegisterAccountCodeScreen" component={RegisterAccountCodeScreen} />
        <Stack.Screen name="RestoreAccountCodeScreen" component={RestoreAccountCodeScreen} />
        <Stack.Screen name="RestoreAccountScreen" component={RestoreAccountScreen} />
        <Stack.Screen name="RestoreAccountCodePosScreen" component={RestoreAccountCodePosScreen} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="Index" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> */

    /* <EventScreen></EventScreen> */
     /* <AddEventScreen></AddEventScreen>  */
     <NewsScreen></NewsScreen> 

  );
}