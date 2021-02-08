import {HasPhoto, HasGif} from '../basics/unionandintersection';

function sendPhotoMessage(data: HasPhoto): {message: string; body: string} {
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

function sendMessages(method: 'photo', ...messages: HasPhoto[]): void;
function sendMessages(method: 'gif', ...messages: HasGif[]): void;

function sendMessages(
  mediaType: 'photo' | 'gif',
  ...messages: (HasPhoto | HasGif)[]
): void {
  if (mediaType === 'photo') {
    (messages as HasPhoto[]).forEach(sendPhotoMessage);
  } else {
    (messages as HasGif[]).forEach(sendGifMessage);
  }
}

// sendMessages('photo', {receiver: 'peter', photoUrl: 'urlhere'});
// sendMessages('gif', {receiver: 'peter', gifUrl: 'urlhere'});
// sendMessages()
