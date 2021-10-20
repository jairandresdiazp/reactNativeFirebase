import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

interface UpdateUsersProps {}

const UpdateUsers: FunctionComponent<UpdateUsersProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Delete</Text>
      </ScrollView>
    </View>
  );
};

export default UpdateUsers;
