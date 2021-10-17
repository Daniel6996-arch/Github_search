import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

users?:any[]


  constructor(private githubService:GithubService) { }

getUsers(){
  this.githubService.getData().subscribe((data) => {
    console.log(data);
    this.users = data
    
  });
}

  ngOnInit(): void {
  }

}
