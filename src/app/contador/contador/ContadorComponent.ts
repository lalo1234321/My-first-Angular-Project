import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
        <div>
            <h1>{{title}}</h1>

            <button (click)="operacion('+')"> + 1 </button>

            <span> {{numero}} </span>

            <button (click)="operacion('-')"> - 1 </button>

        </div>

            <br>
            <Strong>-</Strong>
            <br>

        <div id = "formulario">
            <form action="" method="get" id = "textBox">
                <input type="text">
            </form>
            <div id = "internalComponent">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae nisi laborum! Facere, laboriosam! Nam libero quasi totam rem culpa consequatur laborum omnis porro veniam, architecto reiciendis qui eum impedit.</h1>
            </div>
            
        </div>

  
  
  `
})
export class ContadorComponent {
  
  title = 'Contador App';
  numero: number = 10;

  sumar() {
    this.numero += 1;
  }

  operacion( operador:string = '' ) {
    (operador == '+') ? 
      this.numero += 1
      :
    this.numero -= 1
  }

  restar() {
    this.numero -= 1;
  }
}
