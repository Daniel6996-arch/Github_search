import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { MyUserComponent } from './my-user/my-user.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {path: 'home', component:MyUserComponent},
  {path: 'users', component:GithubComponent},
  {path: 'repos', component:ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
