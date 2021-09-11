import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  formModelLogin= this.fb.group({
      username : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(4)]],
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
   register(role: string): Observable<any>{
    var body = JSON.stringify({
     FullName : this.formModel.value.FullName,
     username : this.formModel.value.username,
     password : this.formModel.value.password,
     role : role,
    });
    console.log(body);
    return this.http.post(this.BaseURI+'home/signup', body, {'headers': this.headers});
  }

   login(): Observable<any>{
    console.log('login');
    let params = new HttpParams()
      .set('username',this.formModelLogin.value.username)
      .set('password', this.formModelLogin.value.password);
     return this.http.post(this.BaseURI+ 'home/login', params, {'headers': this.headers});
  }

   authenticate(){
     localStorage.setItem('isAuthenticated' , 'true' );
     this.router.navigate(['home']);
   }
}
