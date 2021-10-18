import { Component, OnInit, Input } from '@angular/core';
import { MyReposService } from '../services/myrepos.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

@Input() creds:any
repos?:any[]

constructor(private myReposService:MyReposService) { }



ngOnInit(): void {
  
  this.myReposService.getRepos().subscribe((data) => {
    console.log(data);
    this.repos = data
    
  });
  
}

}
