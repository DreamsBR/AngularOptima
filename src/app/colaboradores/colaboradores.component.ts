import { Component, OnInit } from '@angular/core';
import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  status: boolean = false;
  colaboradoresLista: Colaborador[];

  constructor(
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {

      this.colaboradorService.getColaboradores().subscribe(
        clientesJsonResponse => {
          this.colaboradoresLista = clientesJsonResponse;
        }
      );

    });
  }

  menuToggle(){
    this.status = !this.status;
  }

}
