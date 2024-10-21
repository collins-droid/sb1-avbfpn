import * as React from "react";
import { tabNavigatorFactory } from "react-nativescript-navigation";
import { MainTabParamList } from "../NavigationParamList";
import { Dashboard } from "./Dashboard";
import { POS } from "./POS";
import { Quotations } from "./Quotations";
import { Customers } from "./Customers";
import { Dispatch } from "./Dispatch";

const TabNavigator = tabNavigatorFactory();

export function MainTabs() {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#65adf1",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <TabNavigator.Screen name="Dashboard" component={Dashboard} />
      <TabNavigator.Screen name="POS" component={POS} />
      <TabNavigator.Screen name="Quotations" component={Quotations} />
      <TabNavigator.Screen name="Customers" component={Customers} />
      <TabNavigator.Screen name="Dispatch" component={Dispatch} />
    </TabNavigator.Navigator>
  );
}