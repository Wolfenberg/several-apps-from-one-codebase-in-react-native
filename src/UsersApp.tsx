import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UsersApp = () => {
  return (
    <View style={styles.body}>
      <Text>Users app</Text>
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

export default UsersApp;
