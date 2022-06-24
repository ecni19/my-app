import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { ajax } from 'rxjs/ajax';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemonList: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url: string = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
    const data: Observable<any> = this.http.get(url);
    // const data = ajax(url);
    data.subscribe(res => {
      this.pokemonList = res;
    })
  }

}
