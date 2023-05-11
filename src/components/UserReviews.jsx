import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

const UserReviews = () => {
  const { data, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (!data?.me) {
    return null;
  }

  const reviews = data.me.reviews.edges.map((edge) => edge.node);

  if (reviews.length === 0) {
    return (
      <View style={styles.container}>
        <Text>You have made no reviews</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} showButtons refetchMe={refetch} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;
