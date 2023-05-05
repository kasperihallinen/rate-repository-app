import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

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
});

const formatNumber = (num) => {
  if (num < 1000) {
    return num;
  }
  const formattedNum = Math.round(num / 100) / 10;
  return formattedNum + 'k';
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRowFlexContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.topColumnFlexContainer}>
          <Text fontWeight='bold' style={styles.rowGap}>
            {item.fullName}
          </Text>
          <Text color='textSecondary' style={styles.rowGap}>
            {item.description}
          </Text>
          <Text type='language' style={styles.rowGap}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRowFlexContainer}>
        <View style={styles.bottomColumnFlexContainer}>
          <Text fontWeight='bold'>{formatNumber(item.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.bottomColumnFlexContainer}>
          <Text fontWeight='bold'>{formatNumber(item.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.bottomColumnFlexContainer}>
          <Text fontWeight='bold'>{formatNumber(item.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.bottomColumnFlexContainer}>
          <Text fontWeight='bold'>{formatNumber(item.ratingAverage)}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
