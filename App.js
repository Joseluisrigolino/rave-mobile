// App.js
import React from 'react';
import HomeScreen from './screens/startAplicationScreens/HomeScreen';
import { View } from 'react-native-web';
//importar register nav
import RegisterAccountScreen from './screens/startAplicationScreens/navigationRegisterScreens/RegisterAccountScreen';
import RegisterAccountCodeScreen from './screens/startAplicationScreens/navigationRegisterScreens/RegisterAccountCodeScreen';
//importar restore nav
import RestoreAccountScreen from "./screens/startAplicationScreens/navigationRestoreScreens/RestoreAccountScreen";
import RestoreAccountCodeScreen from "./screens/startAplicationScreens/navigationRestoreScreens/RestoreAccountCodeScreen";

export default function App() {
  return (

    //<HomeScreen />
    
    //<RegisterAccountScreen />

    //<RegisterAccountCodeScreen />


    //<RestoreAccountScreen />

    <RestoreAccountCodeScreen />
  );
}