// Intersection
interface HasPhone {
  name: string;
  phone: number;
}

interface HasEmail {
  name: string;
  email: string;
}

// let contact: HasEmail | HasPhone;
// contact = {
//   name: 'Peter',
//   phone: 812381283,
//   email: ''
// };

// contact.phone;

// Union
// let otherContact: HasEmail & HasPhone = {
//   name: 'Peter',
//   email: 'peter@incube8.sg',
//   phone: 88888,
// };

// exported for later use
export interface HasPhoto {
  receiver: string;
  photoUrl: string;
}

export interface HasGif {
  receiver: string;
  gifUrl: string;
}
