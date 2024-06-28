import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {

  @Output() public emmitSeearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    this.emmitSeearch.emit(value);
  }


}
