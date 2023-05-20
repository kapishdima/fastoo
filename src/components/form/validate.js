import set from 'lodash.set';

export const validateAll = async (values, schema) => {
  let errors = {};

  try {
    await schema.validate(values, { abortEarly: false });
    errors = {};
  } catch (error) {
    error.inner.forEach((error) => {
      const field = error.path;
      const message = error.message;
      set(errors, field, message);
    });
  }
  return errors;
};

export const validateOne = async (field, values, schema) => {
  let error = '';
  try {
    await schema.validateAt(field, values);
    error = '';
  } catch (_error) {
    error = _error.message;
  }
  return error;
};
