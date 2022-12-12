import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Pages/Home';
import { Pagina1 } from './Pages/Pagina1'; 
import { Pagina2 } from './Pages/Pagina2'; 




// o nome atribuido será usado  para navegar entre as as telas,
// será inserido em  onPress={() => navigation.navigate('nomedatela)

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina2" component={Pagina2} />
    </Stack.Navigator>
  );
}