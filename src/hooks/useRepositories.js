import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, searchKeyword) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { ...order, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data ? data.repositories : null,
    error,
    loading,
  };
};

export default useRepositories;
