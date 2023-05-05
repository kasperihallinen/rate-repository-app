import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background3,
    paddingLeft: theme.paddings.primary,
    paddingRight: theme.paddings.primary,
    paddingBottom: theme.paddings.primary,
    justifyContent: 'space-evenly',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.primary,
    height: theme.formFieldHeight.primary,
    marginTop: theme.paddings.primary,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry={true}
          />
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text color='textTertiary' fontSize='subheading'>
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
