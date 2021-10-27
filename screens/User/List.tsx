import React, { FunctionComponent, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { db } from '../../database/firebase';
import { UserType } from 'types-app';
import styles from './styles';

interface LitsUsersProps {
  navigation: any;
}

const LitsUsers: FunctionComponent<LitsUsersProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    db.collection('user').onSnapshot((snapshot) => {
      const data: UserType[] = [];
      snapshot.forEach((doc) => {
        const { name, email, phone } = doc.data();
        data.push({
          email,
          name,
          phone,
        });
      });
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Button
        title="Create user"
        onPress={() => {
          navigation.navigate('CreateUsers', {
            user: { email: '', name: '', phone: '' },
          });
        }}
      />
      <Text style={styles.title}>User List</Text>
      {users.map((user: UserType, i: number) => {
        const { name, email } = user;
        return (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => {
              navigation.navigate('DetailUsers', {
                action: 'detail',
                user,
              });
            }}
          >
            <Avatar
              rounded
              source={{
                uri: `https://picsum.photos/100?v=${(Math.random() + 1)
                  .toString(36)
                  .substring(7)}`,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{name}</ListItem.Title>
              <ListItem.Subtitle>{email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default LitsUsers;
