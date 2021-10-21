import React, { FunctionComponent, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';
import styles from './styles';

interface DetailUsersProps {
  route: any;
  navigation: any;
}

const DetailUsers: FunctionComponent<DetailUsersProps> = ({
  route,
  navigation,
}) => {
  const [user, setUser] = useState<UserType>({ ...route.params });
  const handleChangeText = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Detail</Text>
        <Avatar
          rounded
          source={{
            uri: `https://picsum.photos/100?v=${(Math.random() + 1)
              .toString(36)
              .substring(7)}`,
          }}
        />
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
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            value={user.email}
            onChangeText={(value: string) => {
              handleChangeText('email', value);
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
        <View>
          <Button title="Save" onPress={() => {}} />
        </View>
        <View>
          <Button title="Delete" onPress={() => {}} />
        </View>
        <View>
          <Button
            title="Back"
            style={{ marginTop: 10 }}
            onPress={() => {
              navigation.navigate('LitsUsers');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailUsers;
