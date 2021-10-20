import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

interface DetailUsersProps {}

const DetailUsers: FunctionComponent<DetailUsersProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Detail</Text>
      </ScrollView>
    </View>
  );
};

export default DetailUsers;
