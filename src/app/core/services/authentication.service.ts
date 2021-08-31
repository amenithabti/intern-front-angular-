import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
  BaseURI = 'https://localhost:44316/';
  formModel= this.fb.group({
    FullName : [''],
    username : ['',Validators.required],
    password : ['',[Validators.required,Validators.minLength(4)]],
    confirmpassword : ['',Validators.required],
     });

  constructor(private router:Router , private http:HttpClient , private fb:FormBuilder )  { }

  comparePasswords( fb:FormGroup){

    let confirmpasswordCtrl = fb.get('confirmpassword');
    if (confirmpasswordCtrl?.errors == null || 'passwordMismatch' in confirmpasswordCtrl.errors) {
      if (fb.get('passwords')?.value!= confirmpasswordCtrl?.value) {
         confirmpasswordCtrl?.setErrors({ passwordMismatch: true});
      } else{
        confirmpasswordCtrl?.setErrors(null);
      }
    } 
  }

   register(): Observable<any>{
    var body = {
     FullName : this.formModel.value.FullName,
     username : this.formModel.value.username,
     password : this.formModel.value.password,
     confirmpassword : this.formModel.value.confirmpassword,
    };
    console.log(body);
    return this.http.get(this.BaseURI+'Home/users');
    console.log("x");
   // return this.http.post(this.BaseURI+'/signup', body, {'headers': this.headers});
}


login (){

var body = {
  username : this.formModel.value.userName,
  password : this.formModel.value.password,

};

return this.http.get(this.BaseURI+ '/login' );
}

 authenticate(userName : String , password : String){

  if (userName === 'admin' &&  password === 'admin'){
   
    localStorage.setItem('isAuthenticated' , 'true' );
    this.router.navigate(['home']);

  }

 }


 
 

}
