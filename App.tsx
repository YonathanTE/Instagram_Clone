/* eslint-disable react/react-in-jsx-scope */
//import React from 'react'; // Can be done without writing this line
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
          }} 
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Yonathan</Text>

        <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots} />
      </View>

      {/* Content */}
      <Image source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
      }} 
      style={styles.image} 
      />

      {/* Footer */}
      <View style={styles.footer}>
      <View style={styles.iconContainer}>
      <AntDesign
          name={'hearto'}
          size={24}
        style={styles.icon}
        color={colors.black}
      />
      <Ionicons
        name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
      />
      <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
      />
      <Feather
          name="bookmark"
          size={24}
          style={{marginLeft: 'auto'}}
          color={colors.black}
      />
      </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>tFall</Text> and
          <Text style={styles.bold}> 89 others</Text>{' '}
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>Yonathan</Text> The Law
          of Moses
        </Text>

        {/* Comments */}
        <Text>View all 21 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Yonathan</Text> In the
            beginning was the Word.
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>

        {/* Posted date */}
        <Text>25 December, 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto', // Moves the 3 dots to the right side of the screen
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  text: {
    color: colors.black,
    lineHeight: 20,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 20,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
