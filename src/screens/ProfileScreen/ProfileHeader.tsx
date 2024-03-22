import {View, Image, Text, ScrollView} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from '../ProfileScreen/styles';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>3098</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>8</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Button(s)*/}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On Edit Profile')}
        />
        <Button
          text="Another button"
          onPress={() => console.warn('On another button')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileHeader;
