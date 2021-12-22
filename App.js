/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.sectionTitle]}>Hola Coder</Text>
      <TextInput placeholder="Name a task" />
      <Button title="Save" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 24,
  },
  sectionTitle: {
    fontSize: 34,
    margin: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
