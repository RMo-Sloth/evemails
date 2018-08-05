import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-received-mails',
  templateUrl: './received-mails.component.html',
  styleUrls: ['./received-mails.component.css']
})
export class ReceivedMailsComponent implements OnInit {

  constructor() { }
  // TODO: need to retreive this from a (mocking) service
  mails: Mail[] = [
  {
      "from": 93920413,
      "is_read": true,
      "labels": [
        3
      ],
      "mail_id": 7,
      "recipients": [
        {
          "recipient_id": 90000002,
          "recipient_type": "character"
        }
      ],
      "subject": "Title for EVE Mail",
      "timestamp": "2015-09-30T16:07:00Z"
    },
    {
      "from": 90000001,
      "is_read": true,
      "labels": [
        3
      ],
      "mail_id": 7,
      "recipients": [
        {
          "recipient_id": 90000002,
          "recipient_type": "character"
        }
      ],
      "subject": "Title for EVE Mail",
      "timestamp": "2015-09-30T16:07:00Z"
    },
    {
      "from": 90000001,
      "is_read": true,
      "labels": [
        3
      ],
      "mail_id": 7,
      "recipients": [
        {
          "recipient_id": 90000002,
          "recipient_type": "character"
        }
      ],
      "subject": "Title for EVE Mail",
      "timestamp": "2015-09-30T16:07:00Z"
    }
  ];
  openMail( mailIndex ){
    location.href='/mail'
  }
  ngOnInit() {
  }

}
