import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AdminsApp = () => {
  return (
    <View style={styles.body}>
      <Text>Admins app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
  },
});

export default AdminsApp;
