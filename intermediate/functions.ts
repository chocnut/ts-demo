import {HasPhoto, HasGif} from '../basics/unionandintersection';

function sendPhotoMessage(data: HasPhoto) {
  return {
    message: data.receiver,
    body: data.photoUrl,
  };
}

const sendGifMessage = (data: HasGif): {message: string; body: string} => {
  return {
    message: data.receiver,
    body: data.gifUrl,
  };
};

// Return type can be inferred too
// const sendGifMessage2 = (data: HasGif) => {
//   return {
//     message: data.receiver,
//     body: data.gifUrl,
//   };
// };
