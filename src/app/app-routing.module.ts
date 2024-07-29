import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { SobreComponent } from './componentes/pages/sobre/sobre.component';
import { NewMomentComponent } from './componentes/pages/new-moment/new-moment.component';
import { MomentComponent } from './componentes/pages/moment/moment.component';
import { EditMomentComponent } from './componentes/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "moments/new", component: NewMomentComponent},
  {path: "moments/edit/:id", component: EditMomentComponent},
  {path: "moments/:id", component: MomentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
