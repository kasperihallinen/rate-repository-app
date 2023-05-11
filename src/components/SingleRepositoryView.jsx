import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} singleView />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepositoryView;
