import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes : string [] = ["Spiderman", "Ironman", "Thor", "El perro", "Okas"];
  globalHeroErased:string = "";
  borrarHeroe() {
    this.globalHeroErased = this.heroes.pop()!;
  }

}
