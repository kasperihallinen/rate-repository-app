import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.primary,
    backgroundColor: theme.colors.background3,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexGrow: 1,
    flex: 1,
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  dateText: {
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.paddings.primary,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.primary,
    minHeight: theme.formFieldHeight.primary,
    flex: 1,
  },
  view: {
    backgroundColor: theme.colors.primary,
    marginRight: theme.paddings.primary,
  },
  delete: {
    backgroundColor: theme.colors.error,
  },
});

const ReviewItem = ({ review, showButtons, refetchMe }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const { text, rating, createdAt, user, repositoryId, id } = review;

  const onPressView = () => {
    navigate(`/${repositoryId}`);
  };

  const onPressDelete = () => {
    const onDelete = async () => {
      await deleteReview(id);
      refetchMe();
    };

    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL',
          style: 'cancel',
        },
        {
          text: 'DELETE',
          onPress: onDelete,
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.ratingContainer}>
          <Text fontSize='subheading' fontWeight='bold' color='primary'>
            {rating}
          </Text>
        </View>
        <View style={styles.columnContainer}>
          <Text fontWeight='bold'>{user.username}</Text>
          <Text color='textSecondary' style={styles.dateText}>
            {format(new Date(createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text>{text}</Text>
        </View>
      </View>
      {showButtons && (
        <View style={styles.buttonsContainer}>
          <Pressable style={[styles.button, styles.view]} onPress={onPressView}>
            <Text color='textTertiary' fontSize='subheading' fontWeight='bold'>
              View Repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.delete]}
            onPress={onPressDelete}>
            <Text color='textTertiary' fontSize='subheading' fontWeight='bold'>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
