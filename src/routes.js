import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/index";

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{}} />
        <Stack.Screen name="Pay" component={Home} options={{}} />
      </Stack.Navigator>
    </>
  );
}

export default Routes;
