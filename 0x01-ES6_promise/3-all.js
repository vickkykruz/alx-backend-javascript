import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.error('Signup system offline');
    });
}
