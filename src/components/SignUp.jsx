import * as yup from 'yup';

import { useNavigate } from 'react-router-native';
import useCreateUser from '../hooks/useCreateUser';
import FormikForm from './FormikForm';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username length must be between 1 and 30')
    .max(30, 'Username length must be between 1 and 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password length must be between 1 and 30')
    .max(50, 'Password length must be between 1 and 30')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Password confirmation must be the same as password'
    )
    .required('Password confirmation is required'),
});

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
    {
      name: 'passwordConfirmation',
      placeholder: 'Password confirmation',
      secureTextEntry: true,
    },
  ],
  buttonText: 'Sign up',
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      contents={contents}
    />
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
