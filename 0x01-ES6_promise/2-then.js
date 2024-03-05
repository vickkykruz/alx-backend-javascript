export default function handleResponseFromAPI(promise) {
  promise.then(
  // eslint-disable-next-line no-unused-vars
    (response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    },
    (error) => {
      console.error(error);
      return new Error();
    },
  );
}
