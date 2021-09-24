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
    email : ['',[Validators.required, Validators.email]],
    phonenumber : [''],
    nationality : [''],
  });

  constructor(private fb:FormBuilder , private http:HttpClient) { }
  add_formateur(formateur: any): Observable<any>{
    return this.http.post(this.BaseURI+ 'formateur/addTrainer', formateur, {'headers': this.headers});
}
}
