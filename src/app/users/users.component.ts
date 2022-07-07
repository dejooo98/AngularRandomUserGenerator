import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

export interface Response {
  info: string;
  results: User[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  private usersApi = 'https://randomuser.me/api/';
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRandomUsers();
    console.log(this.users);
  }

  getRandomUsers() {
    return this.http
      .get<Response>(this.usersApi + '?results=50')
      .subscribe((response: Response) => {
        console.log(response.results);
        this.users = response.results;
      });
  }
}
