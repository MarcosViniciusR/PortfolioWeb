import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  detalhesSobre = ['Marcos Vinicius Ribeiro', '25 anos','marcos.vinicius997@outlook.com','(12) 3157-6358', 'Lorena - SP'];

  hiddenHtml:boolean = true;
  hiddenCss:boolean = true;
  hiddenJs:boolean = true;
  hiddenBootstrap:boolean = true;
  hiddenAngular:boolean = true;
  hiddenJava:boolean = true;
  hiddenSpring:boolean = true;
  hiddenMysql:boolean = true;
  hiddenGit:boolean = true;
  hiddenPython:boolean = true;

  onClick(valor:number){
    if(valor == 1){
      let elemento:any = document.getElementById('html')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      
      this.hiddenHtml = !this.hiddenHtml;

    }
    if(valor == 2){
      let elemento:any = document.getElementById('css')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenCss = !this.hiddenCss;
    }
    if(valor == 3){
      let elemento:any = document.getElementById('js')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenJs = !this.hiddenJs;
    }
    if(valor == 4){
      let elemento:any = document.getElementById('bootstrap')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenBootstrap = !this.hiddenBootstrap;
    }
    if(valor == 5){
      let elemento:any = document.getElementById('angular')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenAngular = !this.hiddenAngular;
    }
    if(valor == 6){
      let elemento:any = document.getElementById('java')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenJava = !this.hiddenJava;
    }
    if(valor == 7){
      let elemento:any = document.getElementById('spring')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenSpring = !this.hiddenSpring;
    }
    if(valor == 8){
      let elemento:any = document.getElementById('mysql')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenMysql = !this.hiddenMysql;
    }
    if(valor == 9){
      let elemento:any = document.getElementById('git')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenGit = !this.hiddenGit;
    }

    if(valor == 10){
      let elemento:any = document.getElementById('python')
      if(elemento.style.backgroundColor != 'dodgerblue'){
        elemento.style.backgroundColor = 'dodgerblue';
      }else{
        elemento.style.backgroundColor = '#2B2B45';
      }
      this.hiddenPython = !this.hiddenPython;
    }
    
  }

  
}
