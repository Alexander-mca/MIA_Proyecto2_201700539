import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './Components/Registro/Registro.component';

const routes: Routes = [{
  path:'registro',
  component:RegistroComponent,
},{
  path:'login',
  component:InicioComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
