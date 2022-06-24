import { Component, Input, OnInit } from '@angular/core';
// import { ajax } from 'rxjs/ajax';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;
  isClick: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const data = ajax(this.pokemon.url);
    const data: Observable<any> = this.http.get(this.pokemon.url);
    data.subscribe(res => {
      this.pokemon = res;
      console.log(this.pokemon);
    })
  }
  onClick() : void {
    this.isClick = !this.isClick;
  }
}
