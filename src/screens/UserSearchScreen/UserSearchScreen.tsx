/* eslint-disable @typescript-eslint/no-unused-vars */
import UserListItem from '../../components/UserListItem';
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import users from '../../assets/data/users.json';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
