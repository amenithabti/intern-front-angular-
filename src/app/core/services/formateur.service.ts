import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
  BaseURI = 'https://localhost:44316/';
  formModelFormateur= this.fb.group({
    fullname : [''],
    email : ['',Validators.required],
    phonenumber : [''],
    nationality : [''],
  });

  constructor(private fb:FormBuilder , private http:HttpClient) { }
  add_formateur(): Observable<any>{
    var body = JSON.stringify({
      fullname : this.formModelFormateur.value.fullname,
      email : this.formModelFormateur.value.email,
      phonenumber : this.formModelFormateur.value.phonenumber,
      nationality : this.formModelFormateur.value.nationality,
      });
    console.log(body);
    return this.http.post(this.BaseURI+ 'formateur/addTrainer', body, {'headers': this.headers});
}
}
