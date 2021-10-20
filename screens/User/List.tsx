import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

interface LitsUsersProps {}

const LitsUsers: FunctionComponent<LitsUsersProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User List</Text>
      </ScrollView>
    </View>
  );
};

export default LitsUsers;
