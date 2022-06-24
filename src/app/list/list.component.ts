import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemonList: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url: string = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
    const data: Observable<any> = this.apiService.SendGetRequest(url);
    data.subscribe(res => {
      this.pokemonList = res;
    })
  }

}
