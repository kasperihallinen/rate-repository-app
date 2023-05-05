import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: 'white',
    error: '#d73a4a',
    primary: '#0366d6',
    background1: '#e1e4e8',
    backGround2: '#24292e',
    background3: 'white',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  paddings: {
    primary: 10,
  },
  borderRadius: {
    primary: 3,
  },
  formFieldHeight: {
    primary: 40,
  },
};

export default theme;
