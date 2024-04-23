/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params?.userId;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
