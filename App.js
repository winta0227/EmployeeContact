/** @format */

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ContactListScreen from "./Pages/ContactListPage"
import EmployeeDetailScreen from "./Pages/EmployeeDetailPage"
import EditScreen from "./Pages/EditPage"
import AddScreen from "./Pages/AddPage"

const Stack = createNativeStackNavigator()

const App = () => {
   return <AppNavigator />
}

const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name='roi-view-all-profiles' component={ContactListScreen} />
            <Stack.Screen name='roi-view-profile' component={EmployeeDetailScreen} />
            <Stack.Screen name='roi-edit-profile' component={EditScreen} />
            <Stack.Screen name='roi-add-profile' component={AddScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

// test  

export default App
