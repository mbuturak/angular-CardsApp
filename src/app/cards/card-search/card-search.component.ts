import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent {
  constructor(private cardServices: CardService) {}

  search(searchText: string): void {
    searchText = searchText.toLowerCase();
    this.cardServices.fiteredCards = this.cardServices.cards.filter((card) => {
      return (
        card.name.toLowerCase().indexOf(searchText) > -1 ||
        card.title.toLowerCase().indexOf(searchText) > -1
      );
    });
  }
}
