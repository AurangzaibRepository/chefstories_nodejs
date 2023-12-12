exports.getResponse = (
  status,
  message,
  errors,
  data = null,
) => {
  const response = {
    status,
  };

  if (message != null) {
    response.message = message;
  }

  if (errors != null) {
    response.errors = errors;
  }

  if (data != null) {
    response.data = data;
  }

  return response;
};
