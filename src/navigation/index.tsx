/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Image} from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator(); // Uses 2 properties { Navigator, Screen }

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        {/* Different Screens (First screen rendered will be default) */}
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator} // Added this so that bottom tab shows on the page (Just a test to see if it worked) **
          options={{headerTitleAlign: 'center', headerShown: false}}
        />

        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
