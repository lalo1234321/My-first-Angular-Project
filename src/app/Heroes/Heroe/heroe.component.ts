import { Component } from "@angular/core";


@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "Ganondorf";
    edad : number = 20;
    getAlias() : string {
        return `ganon ${this.edad}`;
    } 
    nombreCapitalizado() : string  {
        return this.nombre.toUpperCase();
    }

    cambiarNombre() : void  {
        this.nombre = "Link";
    }
}