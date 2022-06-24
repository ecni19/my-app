import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;
  isClick: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    const data: Observable<any> = this.apiService.SendGetRequest(this.pokemon.url);
    data.subscribe(res => {
      this.pokemon = res;
      console.log(this.pokemon);
    })
  }
  onClick() : void {
    this.isClick = !this.isClick;
  }
}
