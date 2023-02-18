import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  usuario:any = {
    nome: '', email:'', telefone:'', assunto:''
  }

  onSubmit(form:any){
    console.log(form);

    console.log(this.usuario);

  }

}
