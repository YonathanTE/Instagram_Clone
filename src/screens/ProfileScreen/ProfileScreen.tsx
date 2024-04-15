/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {Image, FlatList, View} from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  return (
    <View>
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />

      {/*GridView Posts */}
      <FlatList
        data={user.posts}
        renderItem={item => (
          <Image
            source={{uri: item.item.image || item.item.images[0]}}
            style={{flex: 1, margin: 1, aspectRatio: 1, maxWidth: '33%'}}
          />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ProfileHeader}
      />
    </View>
  );
};

export default ProfileScreen;
