import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Search
     </Text>
    </View>
  );
}

SearchScreen.navigationOptions = {
  header: null,
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