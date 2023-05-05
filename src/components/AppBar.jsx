import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: theme.paddings.primary,
    backgroundColor: theme.colors.backGround2,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab tabName='Repositories' linkTo='/' />
        <AppBarTab tabName='Sign in' linkTo='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
