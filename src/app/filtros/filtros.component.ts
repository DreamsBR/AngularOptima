import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html'
})
export class FiltrosComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
