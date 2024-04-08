/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
//import React from 'react'; // Can be done without writing this line
import {StyleSheet, View, FlatList} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
      {/* <CommentsScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
