import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LitsUsers from './screens/User/List';
import UpdateUsers from './screens/User/Update';
import CreateUsers from './screens/User/Create';
import DeleteUsers from './screens/User/Delete';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateUsers">
        <Stack.Screen name="LitsUsers" component={LitsUsers} />
        <Stack.Screen name="CreateUsers" component={CreateUsers} />
        <Stack.Screen name="UpdateUsers" component={UpdateUsers} />
        <Stack.Screen name="DetelteUsers" component={DeleteUsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
