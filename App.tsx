import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LitsUsers from './screens/User/List';
import CreateAndUpdateUsers from './screens/User/CreateAndUpdate';

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
          component={CreateAndUpdateUsers}
          options={{ title: 'Create user' }}
          initialParams={{
            action: 'create',
            user: { email: '', name: '', phone: '' },
          }}
        />
        <Stack.Screen
          name="DetailUsers"
          component={CreateAndUpdateUsers}
          options={{ title: 'Detail user' }}
          initialParams={{
            action: 'detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
