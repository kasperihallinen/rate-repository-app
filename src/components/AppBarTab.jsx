import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});

const AppBarTab = ({ tabName, linkTo }) => {
  return (
    <Link style={styles.container} to={linkTo}>
      <Text color={'textTertiary'}>{tabName}</Text>
    </Link>
  );
};

export default AppBarTab;
