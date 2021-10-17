import { Component, OnInit } from '@angular/core';
import { MyReposService } from '../services/myrepos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos?:any[]


  constructor(private myReposService:MyReposService) { }

getRepo(){
  this.myReposService.getRepos().subscribe((data) => {
    console.log(data);
    this.repos = data
    
  });
}

  ngOnInit(): void {
  }

}