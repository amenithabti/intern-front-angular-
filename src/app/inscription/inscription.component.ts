import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private router: Router , public service: AuthenticationService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  create_account(){
    this.service.register('user').subscribe(result=>{
      this.service.authenticate();
    })
  }




















  
//this.service.register().subscribe(

  //(res : any) =>{

   // if (res.succeded){
    //  this.service.formModel.reset();
    //  
    //}else {
     // res.errors.array.forEach( element => {
        //switch ( element.code){
          //case 'DuplicateUserName':
            //User is already taken
           // break;

           // default:
              //registration failed 
            //  break;
     //   }
     // });;
      
   // }
 // },
  //err => {
   // console.log(err);
 // }
//);
 // }
}
