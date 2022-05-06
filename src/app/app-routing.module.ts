import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CapsuleComponent } from './components/capsule/capsule.component';
import { LunchProgramsComponent } from './components/launch-programs/launch-programs.component';
import { ListCapsuleComponent } from './components/list-capsule/list-capsule.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'capsules', component: ListCapsuleComponent},
  { path: 'capsule/:id', component: CapsuleComponent},
  { path: 'launches', component: LunchProgramsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
