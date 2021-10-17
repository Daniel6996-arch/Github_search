import { MyGitService } from '../services/mygit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {

users?:any[]


  constructor(private myGitService:MyGitService) { }

getUsers(){
  this.myGitService.getData().subscribe((data) => {
    console.log(data);
    this.users = data
    
  });
}


  ngOnInit(): void {
  }

}