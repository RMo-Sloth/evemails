import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAccountService } from '../user-account.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

interface BasicAccountInfo{
  CharacterID: number,
  CharacterName: string,
  CharacterOwnerHash: string,
  ExpiresOn: string,
  IntellectualProperty: string,
  TokenType: string
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
    private userAccountService: UserAccountService,
    private localStorageService: LocalStorageService
  ) { }

  public signup_account( accessToken ): void{
    // TODO:  we should retreive the accessToken, refreshToken and expiration through a serverside request, the parameter of this function should then be the authorization_code not the accessToken.
    this.get_accountInfo( accessToken )
      .subscribe( (accountInfo: BasicAccountInfo) => {
        const characterIndex = accountInfo.CharacterID;
        this.register_account( characterIndex, accessToken, '')
      });
  }
  private get_accountInfo( accessToken ): Observable<BasicAccountInfo>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${accessToken}`
      })
    };
    // there was an issue where the old accountInfo got loaded repeatably.
    // the accessToken is added to the url to prevent browser-caching.
    return this.http.get<BasicAccountInfo>(`https://esi.tech.ccp.is/verify/?token=${accessToken}`, httpOptions);
  }
  private register_account( characterIndex, accessToken, refreshToken ){
    this.userAccountService.add_account( characterIndex,  accessToken, refreshToken ); // TODO: should add accessToken too.
    this.localStorageService.add_account( characterIndex, accessToken, refreshToken ); // TODO: add expiration time of accessToken too
  }

}