import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function MsgScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        No Messages
     </Text>
    </View>
  );
}

MsgScreen.navigationOptions = {
  title: 'Messages',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 28
  }
});