import { View, StyleSheet, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import Text from './Text';
import theme from '../theme';
import formatNumber from '../utils/formatNumber';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.primary,
    backgroundColor: theme.colors.background3,
  },
  topRowFlexContainer: {
    flexDirection: 'row',
  },
  topColumnFlexContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexGrow: 1,
    flex: 1,
  },
  bottomRowFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: theme.paddings.primary,
  },
  bottomColumnFlexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: theme.borderRadius.primary,
    marginRight: 15,
  },
  rowGap: {
    marginBottom: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.primary,
    height: theme.formFieldHeight.primary,
  },
});

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.bottomColumnFlexContainer}>
      <Text fontWeight='bold'>{formatNumber(count)}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, singleView }) => {
  const onPress = () => {
    Linking.openURL(item.url);
  };

  return (
    <View style={styles.container} testID='repositoryItem'>
      <View style={styles.topRowFlexContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.topColumnFlexContainer}>
          <Text fontWeight='bold' style={styles.rowGap}>
            {item.fullName}
          </Text>
          <Text color='textSecondary' style={styles.rowGap}>
            {item.description}
          </Text>
          <Text type='language'>{item.language}</Text>
        </View>
      </View>
      <View style={styles.bottomRowFlexContainer}>
        <CountItem label='Stars' count={item.stargazersCount} />
        <CountItem label='Forks' count={item.forksCount} />
        <CountItem label='Reviews' count={item.reviewCount} />
        <CountItem label='Rating' count={item.ratingAverage} />
      </View>
      {singleView && (
        <Pressable style={styles.button} onPress={onPress}>
          <Text color='textTertiary' fontSize='subheading' fontWeight='bold'>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
