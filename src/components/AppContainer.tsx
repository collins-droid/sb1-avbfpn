import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { AuthStack } from "./AuthStack";
import { MainTabs } from "./MainTabs";
import { RootStackParamList } from "../NavigationParamList";

const StackNavigator = stackNavigatorFactory();

export function AppContainer() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <StackNavigator.Screen name="Main" component={MainTabs} />
        ) : (
          <StackNavigator.Screen name="Auth" component={AuthStack} />
        )}
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
}