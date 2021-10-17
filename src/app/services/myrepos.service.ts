import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyReposService {

  constructor(private httpClient:HttpClient) { }
getRepos():Observable<any>{ 
  const url = "https://api.github.com/users/Daniel6996-arch/repos"
  return this.httpClient.get<any>(url)
}

}