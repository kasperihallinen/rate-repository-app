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
    borderColor: '#aab2bb',
    borderWidth: 1,
    borderRadius: theme.borderRadius.primary,
    paddingHorizontal: theme.paddings.primary,
    minHeight: theme.formFieldHeight.primary,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={theme.colors.placeholder}
      {...props}
    />
  );
};

export default TextInput;
