import React, { FunctionComponent, useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import styles from './styles';
import firebase from '../../database/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface CreateUsersProps {}

const CreateUsers: FunctionComponent<CreateUsersProps> = () => {
  const initState = {
    name: '',
    email: '',
    phone: '',
  };
  const [state, setSatate] = useState(initState);
  const handleChangeText = (key: string, value: string) => {
    setSatate({ ...state, [key]: value });
  };

  const save = async () => {
    try {
      if (state.email == '' || state.name == '') {
        alert('Bat data');
      } else {
        const userCollection = collection(firebase.db, 'user');
        const doc = await addDoc(userCollection, state);
        console.log(`Doc ID: ${doc.id}`);
        setSatate(initState);
      }
    } catch (error) {
      console.log(`Error Firebase: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Create</Text>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Name"
            value={state.name}
            onChangeText={(value: string) => {
              handleChangeText('name', value);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email"
            value={state.email}
            onChangeText={(value: string) => {
              handleChangeText('email', value);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Phone"
            value={state.phone}
            onChangeText={(value: string) => {
              handleChangeText('phone', value);
            }}
          />
        </View>
        <View>
          <Button
            title="Save"
            onPress={() => {
              save();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateUsers;
