import React, { FunctionComponent, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { db } from '../../database/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';

interface CreateUsersProps {
  navigation: any;
}

const CreateUsers: FunctionComponent<CreateUsersProps> = ({ navigation }) => {
  const initState: UserType = {
    email: '',
    name: '',
    phone: '',
  };
  const [state, setSatate] = useState<UserType>(initState);
  const handleChangeText = (key: string, value: string) => {
    setSatate({ ...state, [key]: value });
  };

  const save = async () => {
    try {
      if (state.email == '' || state.name == '') {
        alert('Bat data');
      } else {
        /*
        crea el registro si no existe si existe lo actualiza
        */
        const docRef = doc(db, 'user', state.email);
        setDoc(docRef, state, { merge: true });
        setSatate(initState);
        navigation.navigate('LitsUsers');
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
          <Input
            placeholder="Name"
            leftIcon={{ type: 'font-awesome', name: 'font' }}
            value={state.name}
            onChangeText={(value: string) => {
              handleChangeText('name', value);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            value={state.email}
            onChangeText={(value: string) => {
              handleChangeText('email', value);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <Input
            placeholder="Phone"
            leftIcon={{ type: 'material', name: 'phone' }}
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
        <View>
          <Button
            title="List"
            style={{marginTop:10}}
            onPress={() => {
              navigation.navigate('LitsUsers');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateUsers;
