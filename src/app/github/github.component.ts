import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

public githubUserQuery?:string;

  constructor() { }

  public searchUser(){}

  ngOnInit(): void {
  }

}
