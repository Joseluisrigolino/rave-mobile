// App.js
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { View } from 'react-native-web';
//importar register nav
import RegisterAccountScreen from './screens/navigationRegisterScreens/RegisterAccountScreen';
import RegisterAccountCodeScreen from './screens/navigationRegisterScreens/RegisterAccountCodeScreen';
//importar restore nav
import RestoreAccountScreen from "./screens/navigationRestoreScreens/RestoreAccountScreen";
export default function App() {
  return (

    //<HomeScreen />
    
    //<RegisterAccountScreen />

    <RegisterAccountCodeScreen />
    //<RestoreAccountScreen />
  );
}