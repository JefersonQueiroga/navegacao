import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes'; 
import { SafeAreaView } from "react-native";
import GlobalStyles from './src/styles/GlobalStyles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      /**
       * O navigationContainer Precisar ficar sob as rotas, 
       * é responsável eme gerenciar todaas as rotas.
       * O SafeAreaView é Utilizar para controler da área de renderização. 
       */

    <NavigationContainer>
      <StatusBar style='dark'/>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
