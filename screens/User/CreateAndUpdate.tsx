import React, { FunctionComponent, useState } from 'react';
import { View, Text, ScrollView, Alert, Platform } from 'react-native';
import styles from './styles';
import { db } from '../../database/firebase';
import { Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';

interface CreateAndUpdateUsersProps {
  route: any;
  navigation: any;
}

const CreateAndUpdateUsers: FunctionComponent<CreateAndUpdateUsersProps> = ({
  route,
  navigation,
}) => {
  const { action } = route.params;
  const [user, setUser] = useState<UserType>({ ...route.params.user });
  const handleChangeText = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  const createOrUpdateUser = async () => {
    try {
      if (user.email == '' || user.name == '') {
        alert('Bat data');
      } else {
        /*
        crea el registro si no existe, si existe lo actualiza
        */
        /*const docRef = doc(db, 'user', user.email);
        setDoc(docRef, user, { merge: true });*/

        await db.collection('user').doc(user.email).set(user);
        navigation.navigate('LitsUsers');
      }
    } catch (error) {
      console.log(`Error Firebase: ${error}`);
    }
  };
  const deleteUser = async () => {
    try {
      if (user.email == '') {
        alert('Bat data');
      } else {
        /*await deleteDoc(doc(db, 'user', user.email));*/
        await db.collection('user').doc(user.email).delete();
        navigation.navigate('LitsUsers');
      }
    } catch (error) {
      console.log(`Error Firebase: ${error}`);
    }
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      'Removing the User',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => deleteUser() },
        { text: 'No', onPress: () => console.log('canceled') },
      ],
      {
        cancelable: true,
      }
    );
  };

  const Title = () => {
    switch (action) {
      case 'create':
        return <Text style={styles.title}>User Create</Text>;
      case 'detail':
        return <Text style={styles.title}>User Detail</Text>;
      default:
        return <Text style={styles.title}>User Create</Text>;
    }
  };

  const Buttons = () => {
    switch (action) {
      case 'create':
        return (
          <View>
            <View>
              <Button
                title="Create"
                onPress={() => {
                  createOrUpdateUser();
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="List"
                onPress={() => {
                  navigation.navigate('LitsUsers');
                }}
              />
            </View>
          </View>
        );
      case 'detail':
        return (
          <View>
            <View>
              <Button
                title="Save"
                onPress={() => {
                  createOrUpdateUser();
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Delete"
                onPress={() => {
                  Platform.OS == 'web' ? deleteUser() : openConfirmationAlert();
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Back"
                onPress={() => {
                  navigation.navigate('LitsUsers');
                }}
              />
            </View>
          </View>
        );
      default:
        return (
          <View>
            <View>
              <Button
                title="Save"
                onPress={() => {
                  createOrUpdateUser();
                }}
              />
            </View>
            <View>
              <Button
                title="List"
                style={{ marginTop: 10 }}
                onPress={() => {
                  navigation.navigate('LitsUsers');
                }}
              />
            </View>
          </View>
        );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title />
      <View style={styles.inputGroup}>
        <Input
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          value={user.email}
          disabled={action != 'create' ? true : false}
          onChangeText={(value: string) => {
            handleChangeText('email', value);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          placeholder="Name"
          leftIcon={{ type: 'font-awesome', name: 'font' }}
          value={user.name}
          onChangeText={(value: string) => {
            handleChangeText('name', value);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          placeholder="Phone"
          leftIcon={{ type: 'material', name: 'phone' }}
          value={user.phone}
          onChangeText={(value: string) => {
            handleChangeText('phone', value);
          }}
        />
      </View>
      <Buttons />
    </ScrollView>
  );
};

export default CreateAndUpdateUsers;
