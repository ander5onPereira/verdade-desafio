import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
const Stack = createStackNavigator();
import { Home } from "./pages/Home";
import { Configuracao } from "./pages/Configuracao";
import { Mesa } from "./pages/Mesa";
import { Acao } from "./pages/Acao";
export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Configuracao"
          component={Configuracao}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Mesa"
          component={Mesa}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Acao"
          component={Acao}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
