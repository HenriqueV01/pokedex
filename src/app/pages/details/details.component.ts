import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public apiError: boolean = true;

  public isLoading: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
              private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.getPokemon;

  }

  get getPokemon(){
    const id= this.activateRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      }, error => {
        this.apiError = true;
      }
    );

  }




}
