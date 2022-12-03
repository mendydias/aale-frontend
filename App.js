import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';



import VerifcationWindow from './src/screen/VerificationScreen';
import LogRegisterWindow from './src/screen/LogRegisterScreen';

export default function App ()  {
  return (

    <SafeAreaProvider>
      <LogRegisterWindow/>

    </SafeAreaProvider>
      
   
  );
}



  







