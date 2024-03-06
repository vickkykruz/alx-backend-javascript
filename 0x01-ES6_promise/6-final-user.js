import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(([signUpResponse, uploadPhotoResponse]) => [
    {
      status: signUpResponse.status,
      value: signUpResponse.status === 'fulfilled' ? signUpResponse.value : signUpResponse.reason,
    },
    {
      status: uploadPhotoResponse.status,
      value: uploadPhotoResponse.status === 'fulfilled' ? uploadPhotoResponse.value : String(uploadPhotoResponse.reason),
    },
  ]);
}
