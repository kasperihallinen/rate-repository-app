import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background3,
    padding: theme.paddings.primary,
    justifyContent: 'space-evenly',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.primary,
    height: theme.formFieldHeight.primary,
  },
});

const FormikForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  contents,
}) => {
  const { inputFields, buttonText } = contents;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          {inputFields.map((field) => (
            <FormikTextInput key={field.name} {...field} />
          ))}
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text color='textTertiary' fontSize='subheading' fontWeight='bold'>
              {buttonText}
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default FormikForm;
