import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

interface DeleteUsersProps {}

const DeleteUsers: FunctionComponent<DeleteUsersProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Delete</Text>
      </ScrollView>
    </View>
  );
};

export default DeleteUsers;
