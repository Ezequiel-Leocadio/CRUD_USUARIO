import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title: String;
  user: any;

  constructor(
    public userService: ApiService
  ) {
    this.title = 'Card inserir'
    this.user = {};
  }

  ngOnInit(): void {
  }

  criar(frm: FormGroup) {
    this.userService.postUser(this.user).subscribe(res => {
      alert(JSON.stringify(res))
      frm.reset();
    })
  }

}
