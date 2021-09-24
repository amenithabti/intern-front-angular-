import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'authentication', component: AuthentificationComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'formateur', component: FormateurComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard,AdminGuard]},
  { path: 'home' , component: HomeComponent, canActivate: [AuthenticationGuard]},
  { path: '', component:AuthentificationComponent },
  { path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
