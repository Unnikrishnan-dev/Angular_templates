import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './contents/users/users.component';
import { ActionsComponent } from './contents/actions/actions.component';
import { SettingsComponent } from './contents/settings/settings.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'actions', component: ActionsComponent},
  {path:'settings',component:SettingsComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
