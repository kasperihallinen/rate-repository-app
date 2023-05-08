import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background3,
    padding: theme.paddings.primary,
    justifyContent: 'space-evenly',
  },
  fieldContainer: {
    marginBottom: theme.paddings.primary * 1.5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.primary,
    height: theme.formFieldHeight.primary,
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
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            <FormikTextInput name='username' placeholder='Username' />
          </View>
          <View style={styles.fieldContainer}>
            <FormikTextInput
              name='password'
              placeholder='Password'
              secureTextEntry={true}
            />
          </View>

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
