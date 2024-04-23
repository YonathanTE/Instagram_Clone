/* eslint-disable react-native/no-inline-styles */
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
        screenOptions={{headerShown: false}}>
        {/* Different Screens (First screen rendered will be default) */}
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator} // Added this so that bottom tab shows on the page (Just a test to see if it worked) **
          options={{headerTitleAlign: 'center'}}
        />

        <Stack.Screen
          name="User Profile"
          component={ProfileScreen}
          options={{title: 'Profile Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
