import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },
  input: {
    borderStyle: 'solid',
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderColor: '#aab2bb',
    borderWidth: 1,
    borderRadius: theme.borderRadius.primary,
    padding: theme.paddings.primary,
    height: theme.formFieldHeight.primary,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
