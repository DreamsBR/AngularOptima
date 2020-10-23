import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(   
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    console.info(this.router.url);
  }

  logOut():void {
    swal('Logout','Ha cerrado sesión correctamente','success');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
