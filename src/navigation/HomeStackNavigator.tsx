/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {Image} from 'react-native';
import logo from '../assets/images/yonathan-logo.png';
import {HomeStackNavigatorParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 225, height: 50}}
    />
  );
};

export default HomeStackNavigator;
