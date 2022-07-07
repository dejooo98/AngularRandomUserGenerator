import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersApi = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getRandomUsers() {
    return this.http.get(this.usersApi + '?results=50');
  }

  getUserByGender() {
    return this.http.get(this.usersApi + '?gender=female');
  }
}
