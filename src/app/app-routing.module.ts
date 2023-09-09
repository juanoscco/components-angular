import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionButtonComponent } from './pages/section-button/section-button.component';
import { SectionInputComponent } from './pages/section-input/section-input.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'button', component: SectionButtonComponent },
  { path: 'input', component: SectionInputComponent },
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
