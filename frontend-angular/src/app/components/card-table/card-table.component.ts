import { Component, OnInit } from '@angular/core';
import { UserModal } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {

  users: UserModal[]
  title: string;

  constructor(
    public userService: ApiService
  ) { this.title = 'Listagem'; }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUser('').subscribe(data => {
      this.users = data.data;
    })
  }
}
