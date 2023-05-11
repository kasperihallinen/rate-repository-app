import * as yup from 'yup';

import { useNavigate } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';
import FormikForm from './FormikForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: null,
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .integer()
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),
  text: yup.string().notRequired(),
});

const contents = {
  inputFields: [
    {
      name: 'ownerName',
      placeholder: 'Repository owner name',
    },
    {
      name: 'repositoryName',
      placeholder: 'Repository name',
    },
    {
      name: 'rating',
      placeholder: 'Rating between 0 and 100',
    },
    {
      name: 'text',
      placeholder: 'Review',
      multiline: true,
    },
  ],
  buttonText: 'Create a review',
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      contents={contents}
    />
  );
};

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const data = await createReview(values);
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
