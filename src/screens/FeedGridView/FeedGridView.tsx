/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList} from 'react-native';
import {IPost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{backgroundColor: 'white', marginHorizontal: -1}}
      // style={{backgroundColor: 'purple', marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
