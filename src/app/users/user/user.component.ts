import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/user', user.cell]);
  }
}
