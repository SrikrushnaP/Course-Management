import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  user_service = inject(UserService) // Service inject without constructor
  isLoggedIn: boolean = false;

  ngOnInit(): void {
      this.user_service.isLoggedIn$.subscribe(res=>{
        this.isLoggedIn = this.user_service.isLoggedIn();
      })
  }
}
