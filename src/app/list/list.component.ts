import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemonList: any = [];
  constructor() { }

  ngOnInit(): void {
    const data = ajax('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    data.subscribe(res => {
      this.pokemonList = res.response;
    })
  }

}
