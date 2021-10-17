import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CLIENT_ID, CLIENT_SECRET } from '../CREDENTIALS/cred';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }
   
   //for github profile
   public getProfile(searchQuery){
     let dataURL = 'https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}';
   }

}
 