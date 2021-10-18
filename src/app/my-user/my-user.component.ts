import { MyGitService } from '../services/mygit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {

creds?:any[]


  constructor(private myGitService:MyGitService) { }

  ngOnInit(): void {
    this.myGitService.getData().subscribe((data) => {
      console.log(data);
      this.creds = data
      
    });
  }

}