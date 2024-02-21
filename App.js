// App.js
import React from 'react';
import HomeScreen from './screens/startAplicationScreens/LoginScreen';
import { View } from 'react-native-web';
//importar register nav
import RegisterAccountScreen from './screens/startAplicationScreens/registerScreens/RegisterAccountScreen';
import RegisterAccountCodeScreen from './screens/startAplicationScreens/registerScreens/RegisterAccountCodeScreen';
//importar restore nav
import RestoreAccountScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountScreen";
import RestoreAccountCodeScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountCodeScreen";
import RestoreAccountCodePosScreen from "./screens/startAplicationScreens/restoreScreens/RestoreAccountCodePosScreen";
//importar libreria de navegacion

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="RegisterAccountScreen" component={RegisterAccountScreen} />
        <Stack.Screen name="RegisterAccountCodeScreen" component={RegisterAccountCodeScreen} />
        <Stack.Screen name="RestoreAccountCodeScreen" component={RestoreAccountCodeScreen} />
        <Stack.Screen name="RestoreAccountScreen" component={RestoreAccountScreen} />
        <Stack.Screen name="RestoreAccountCodePosScreen" component={RestoreAccountCodePosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    //<HomeScreen />
    
    //<RegisterAccountScreen />

    //<RegisterAccountCodeScreen />


    //<RestoreAccountScreen />

    //<RestoreAccountCodeScreen />
  );
}