export const hasError = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    hasError
  };
});

export default mock;
