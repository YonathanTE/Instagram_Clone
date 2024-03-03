/* eslint-disable react/react-in-jsx-scope */
//import React from 'react'; // Can be done without writing this line
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
