import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this service is responsible for keeping verification token up-to-date
// TODO: remove/refacter the accounts out in favor of a more functional approach (SRP)
export class VerificationService {

  accounts: any[] = []; // TODO: more strict typecheck

  constructor() { }


  public add_account(
    accountIndex: number,
    refreshToken: string,
    accessToken: string
  ): void{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      this.update_accessToken( accountIndex, accessToken );
      this.update_refreshToken( accountIndex, refreshToken );
      console.warn("An account you wanted to add already exists! We updated the accessToken and refreshtoken with the ones recently provided.");
    }else{ // if accountExists === false
      let account = {
        accountIndex: accountIndex,
        refreshToken: refreshToken,
        accessToken: accessToken
      };
      this.accounts.push( account ); // TODO: typecheck
    }
  }
  public remove_account( accountIndex: number ): void{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      this.accounts = this.accounts.filter( account => {
        return account.accountIndex !== accountIndex;
      });
    }else{ // if accountExists === false
      console.warn("Tried to remove an account that doesn't exist!");
    }
  }

  private get_account( accountIndex: number ): any { // TODO: typecheck account
      return this.accounts.find( account => {
        return account.accountIndex === accountIndex;
      });
  }
  private accountExists( accountIndex: number ): boolean{
    const index = this.accounts.findIndex( account => {
      return account.accountIndex === accountIndex;
    });
    // return true if the account is found ( when index doesn't equal -1)
    return ( index !== -1 );
  }

  private get_refreshToken( accountIndex: number ): string{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      return this.get_account( accountIndex ).refreshToken;
    }
  }
  private update_refreshToken( accountIndex: number, newRefreshToken: string ): void{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      this.get_account( accountIndex ).refreshToken = newRefreshToken;
    }
  }

  public get_accessToken( accountIndex: number ): string{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      return this.get_account( accountIndex ).accessToken;
    }
  }
  private update_accessToken( accountIndex: number, newAccessToken: string ): void{
    const accountExists = this.accountExists( accountIndex );
    if( accountExists === true ){
      this.get_account( accountIndex ).accessToken = newAccessToken;
    }
  }

  public refresh_tokens( accountIndex: number ): void{
    // get refresh token

    // request new accessToken from the eve server
    // save the token
    // calculate the duration for until the token needs refreshment
    // recurse after timeout
  }

}