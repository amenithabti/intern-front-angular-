import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

constructor(private router:Router,  private route: ActivatedRoute,  public service: AuthenticationService) { }

  ngOnInit(): void {
    this.service.formModelLogin.reset();
  }
  
  connect(){
    this.service.login().subscribe(result =>{
      console.log(result);
      this.service.authenticate();
      this.service.setAdmin();
       })
    }
    

  }

