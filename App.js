/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={[
        styles.sectionTitle,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      Hola Coder
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
