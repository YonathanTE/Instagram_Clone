/* eslint-disable @typescript-eslint/no-unused-vars */

import {Image, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../FeedGridView/FeedGridView';

const ProfileScreen = () => {
  return (
    /* GridView Posts */
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
