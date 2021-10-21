import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { db } from '../../database/firebase';
import { UserType } from 'types-app';
import styles from './styles';

interface LitsUsersProps {
  navigation: any;
}

const LitsUsers: FunctionComponent<LitsUsersProps> = ({ navigation }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    const q = query(collection(db, 'user'));
    onSnapshot(q, (snapshot) => {
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
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Create user"
          onPress={() => {
            navigation.navigate('CreateUsers');
          }}
        />
        <Text style={styles.title}>User List</Text>
        {users.map((user: UserType, i: number) => {
          const { name, email } = user;
          return (
            <ListItem
              key={i}
              bottomDivider
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              onPress={() => {
                navigation.navigate('DetailUsers', user);
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
    </View>
  );
};

export default LitsUsers;
