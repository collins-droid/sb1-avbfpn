import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { AuthStackParamList } from "../NavigationParamList";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const StackNavigator = stackNavigatorFactory();

export function AuthStack() {
  return (
    <StackNavigator.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#65adf1",
        },
        headerTintColor: "white",
      }}
    >
      <StackNavigator.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
      <StackNavigator.Screen name="SignUp" component={SignUp} options={{ title: "Sign Up" }} />
    </StackNavigator.Navigator>
  );
}