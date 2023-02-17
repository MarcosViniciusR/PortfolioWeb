import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  botao:string = 'Ver mais';

  onClick(){
    if(this.botao != 'Ver mais' ){
      this.botao = 'Ver mais';
    } else{
      this.botao = 'Ver menos';

    }
  }
}
