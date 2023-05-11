import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backGround2,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

const AppBarTab = ({ tabName, linkTo, onPress }) => {
  return (
    <Link style={styles.tabContainer} onPress={onPress} to={linkTo}>
      <Text color={'textTertiary'} fontWeight='bold'>
        {tabName}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const { data } = useQuery(ME);

  const signedIn = data && data.me ? true : false;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName='Repositories' linkTo='/' />
        {!signedIn && (
          <>
            <AppBarTab tabName='Sign in' linkTo='/sign-in' />
            <AppBarTab tabName='Sign up' linkTo='/sign-up' />
          </>
        )}
        {signedIn && (
          <>
            <AppBarTab tabName='Create a review' linkTo='/review' />
            <AppBarTab tabName='My reviews' linkTo='/my-reviews' />
            <AppBarTab tabName='Sign out' linkTo='/sign-in' onPress={signOut} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
