import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from '../../models/cart';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cardInput!: Cart;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openUpdateCartModal(card: Cart) {
    this.dialog.open(CardModalComponent, {
      width: '400px',
      data : card,
    });
  }
}
