import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

public githubUserQuery?:string;
public githubProfile:any;
public githubRepos!:any[];
public errorMessage!:string;


  constructor(private githubService:GithubService) { }

  //profile
  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe( data =>{
        this.githubProfile = data;
    })

    //repos
    this.githubService.getRepos(this.githubUserQuery).subscribe( data =>{
      this.githubRepos = data;
  })
  };


  ngOnInit(): void {
  }

}
