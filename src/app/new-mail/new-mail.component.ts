import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{ Character } from '../classes/character/Character';
import{ Account } from '../classes/account/Account';

import { AppStateService } from '../app-state.service';
import{ UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent implements OnInit {

  account_id: number;
  account: Account;
  navigationButtons; // TODO: add type

  constructor(
    private route: ActivatedRoute,
    public  appStateService : AppStateService,
    public userAccountService: UserAccountService
  ) {
    this.account_id = parseInt( this.route.snapshot.paramMap.get('account_id') );
    this.account = this.userAccountService.get_account( this.account_id );
    this.navigationButtons = [
      { faClass: 'home', routerUrl: '/dashboard'},
      { faClass: 'envelope', routerUrl: `/${this.account.character.characterId}/mails`}
    ];
  }

  ngOnInit() {
    this.account.character.name$.asObservable().subscribe( name => {
      this.appStateService.currentPageName = name;
    });
  }

}
