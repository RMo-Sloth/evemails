import { Injectable } from '@angular/core';

import{ Character } from '../classes/Character';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  accounts:Character[] = [];

  constructor() {
    if( localStorage.getItem('accounts') !== null )
    {
      let accounts = JSON.parse( localStorage.getItem('accounts') );
      accounts.forEach( account => {
        this.add_account( account.characterId, account.characterName );

        // TODO: refactor to mailService
        // this.add_account(
          // new UserAccountService(
          //   'accessToken',
          //   'refreshToken',
          //   'tokenExpirationTime'
          // )
        // );
      });
    }
    // TODO: httpService should contain the
    // * accessToken don't need!
    // * refreshToken
    // * tokenExpirationTime
    // TODO: all the below:
    // after reirect of teh account verification we will get a:
    // * access token
    // * refresh token
    // * token expiration time ( will need to check this every minute through the app-state? And refresh when necessary. The appstate will set the frequency and UserAccountService will figure out when to update )
    // * With this info we can verify through our own server and get the characterId
    // * characterId
    // characterId, and refresh token should be stored in a cookie
    // With the token and characterId we can gather all kinds of information
    // * characterImageUrls
    // * characterName
  }
  // modify this.account
  private add_account( characterId, characterName ):void{
    // TODO: prevent creation of identical characters
    let character = new Character( characterId );
    character.name = characterName;
    this.accounts.push( character );
  }
  public get_account( characterIndex: number ): Character{
    for( let i=0; this.accounts.length > i; i++ ){
      if( this.accounts[i].characterId  === characterIndex ){
        return this.accounts[i];
      }
      // TEMP: alert
    }
    alert('Account can not be found!');
  }
}
