import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  language: {
    color: theme.colors.textTertiary,
    backgroundColor: theme.colors.primary,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: theme.borderRadius.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextTertiary: {
    color: theme.colors.textTertiary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, type, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textTertiary' && styles.colorTextTertiary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    type === 'language' && styles.language,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
