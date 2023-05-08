import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useAuthStorage } from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backGround2,
  },
});

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
        {!signedIn && <AppBarTab tabName='Sign in' linkTo='/signin' />}
        {signedIn && (
          <AppBarTab tabName='Sign out' linkTo='/signin' onPress={signOut} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
