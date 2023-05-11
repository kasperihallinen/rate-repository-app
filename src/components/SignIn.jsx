import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import FormikForm from './FormikForm';

const contents = {
  inputFields: [
    {
      name: 'username',
      placeholder: 'Username',
    },
    {
      name: 'password',
      placeholder: 'Password',
      secureTextEntry: true,
    },
  ],
  buttonText: 'Sign in',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      contents={contents}
    />
  );
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
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
