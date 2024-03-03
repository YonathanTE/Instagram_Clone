/* eslint-disable react/react-in-jsx-scope */
//import React from 'react'; // Can be done without writing this line
import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      keyExtractor={item => {
        return `post-${item.id}`;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
