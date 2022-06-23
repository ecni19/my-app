import { Component, Input, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;
  isClick: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const data = ajax(this.pokemon.url);
    data.subscribe(res => {
      this.pokemon = res.response;
      console.log(this.pokemon);
    })
  }
  onClick() : void {
    this.isClick = !this.isClick;
  }
}
