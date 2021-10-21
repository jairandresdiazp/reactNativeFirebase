import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LitsUsers from './screens/User/List';
import CreateUsers from './screens/User/Create';
import DetailUsers from './screens/User/Detail';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateUsers">
        <Stack.Screen
          name="LitsUsers"
          component={LitsUsers}
          options={{ title: 'List users' }}
        />
        <Stack.Screen
          name="CreateUsers"
          component={CreateUsers}
          options={{ title: 'Create user' }}
        />
        <Stack.Screen
          name="DetailUsers"
          component={DetailUsers}
          options={{ title: 'Detail user' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
