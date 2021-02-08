import {HasPhoto} from '../basics/unionandintersection';

export interface HasEmoji extends HasPhoto {
  emoji: string;
}

interface SendMessage {
  receiver: string;
  (message: string): void;
}
