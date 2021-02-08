import {HasPhoto, HasGif} from '../basics/unionandintersection';

// Implements interface
// export class Message implements HasPhoto {
//   receiver: string;
//   photoUrl: string;

//   constructor(receiver: string, photoUrl: string) {
//     this.receiver = receiver;
//     this.photoUrl = photoUrl;
//   }
// }

// let m = new Message('peter', 'someUrl');

// Access modifier
// - public - everyone
// - protected - me and subclass
// - private - only me

// class Message implements HasPhoto {
//   constructor(public receiver: string, public photoUrl: string) {}
// }

// class Message implements HasPhoto {
//   constructor(public receiver: string, protected photoUrl: string) {}
// }

// m = new Message('sss', '123123');

// Multiple implements
// class Message implements HasPhoto, HasGif {
//   constructor(
//     public receiver: string,
//     public photoUrl: string,
//     public gifUrl: string
//   ) {}
// }

// Private accessor
// class Message implements HasPhoto, HasGif {
//   protected isSent = false;
//   private body: string;

//   constructor(
//     public receiver: string,
//     public photoUrl: string,
//     public gifUrl: string
//   ) {
//     this.isSent = false;
//   }

//   get message() {
//     this.body = 'foo bar';
//     return this.body;
//   }
// }

// const m = new Message('a', 'url', url);
// console.log(m.isSent);

// Abstract class

abstract class AbstractMessage implements HasPhoto, HasGif {
  constructor(
    public receiver: string,
    public photoUrl: string,
    public gifUrl: string
  ) {}

  abstract sendMessage(): void;
}

// Example of implementation of abstract class
// class Message extends AbstractMessage {
//   constructor(
//     public receiver: string,
//     public photoUrl: string,
//     public gifUrl: string
//   ) {
//     super(receiver, photoUrl, gifUrl);
//   }

//   sendMessage() {}
// }
