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

  isNextStep = false;
  newFormateur: any; 

  constructor(private router:Router , public service: AuthenticationService, public serviceFormateur: FormateurService) { }

  ngOnInit(): void {
  }

  selectNewFormateur() {
    this.newFormateur = {
      fullname : this.serviceFormateur.formModelFormateur.value.fullname,
      email : this.serviceFormateur.formModelFormateur.value.email,
      phonenumber : this.serviceFormateur.formModelFormateur.value.phonenumber,
      nationality : this.serviceFormateur.formModelFormateur.value.nationality,
      UserId: null
      }
      console.log(this.newFormateur);
      this.isNextStep = true;
  }

  add_formateur(formateur: any){
    this.serviceFormateur.add_formateur(formateur).subscribe(result=>{
          
    })
  }

  create_account(){
    this.service.register('trainer').subscribe(result=>{
      this.newFormateur.UserId = result.userId;
      this.add_formateur(this.newFormateur);
      this.router.navigate(['dashboard']);
    })
  }

}
