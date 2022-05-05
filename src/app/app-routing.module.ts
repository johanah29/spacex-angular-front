import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './components/capsule/capsule.component';
import { ListCapsuleComponent } from './components/list-capsule/list-capsule.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListCapsuleComponent },
  { path: 'capsules', component: ListCapsuleComponent},
  { path: 'capsule/:id', component: CapsuleComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
