import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreveComponent } from './breve/breve.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [{path: 'sobre', component: SobreComponent}, {path: '', component: HomeComponent}, {path: 'contato', component: ContatoComponent}, {path:'projeto', component: ProjetosComponent}, {path:'breve', component: BreveComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
