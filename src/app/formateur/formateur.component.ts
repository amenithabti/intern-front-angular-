import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { FormateurService } from '../core/services/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  constructor(private router:Router , public service: AuthenticationService, public serviceFormateur: FormateurService) { }

  ngOnInit(): void {
  }

  add_formateur(){
    this.serviceFormateur.add_formateur().subscribe(result=>{
          
    })
  }
}
