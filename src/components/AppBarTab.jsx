import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

const AppBarTab = ({ tabName, linkTo, onPress }) => {
  return (
    <Link style={styles.container} onPress={onPress} to={linkTo}>
      <Text color={'textTertiary'} fontWeight='bold'>
        {tabName}
      </Text>
    </Link>
  );
};

export default AppBarTab;
