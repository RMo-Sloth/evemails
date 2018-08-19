import { Mail } from './mail/mail';

export class MailAccount{
  characterId: number;
  unreadMails: number = 0;
  refreshToken: string;
  accessToken: string = '';
  tokenExpirationTime; //: Date = '';
  mails: Mail[] = [];
  constructor( characterId: number ){
    this.characterId = characterId;
  }
}
// TODO: I probably should seperate out the refreshToken, accessToken and tokenExpirationTime into a seperate service.
