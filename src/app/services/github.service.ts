import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }
getData():Observable<any>{ 
  const url = "https://api.github.com/users/Daniel6996-arch"
  return this.httpClient.get<any>(url)
}

}
