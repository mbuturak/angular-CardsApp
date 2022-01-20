import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!: Cart[];
  fiteredCards!: Cart[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient,
    private __snackBar: SnackbarService
  ) {}

  getCards(): void {
    this.http.get<Cart[]>(this.apiUrl + 'users').subscribe(
      (res) => (this.cards = this.fiteredCards = res),
      (err) =>
        this.__snackBar.createSnackBar(
          'error',
          'Sistemsel bir hata ile karşılaşıldı!',
          5000
        )
    );
  }

  addToCards(card: Cart): Observable<any> {
    return this.http.post(this.apiUrl + 'users', card);
  }

  updateCards(card: Cart, cartItem: number): Observable<any> {
    return this.http.put(this.apiUrl + 'users/' + cartItem, card);
  }

  deleteCards(cartItem: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'users/' + cartItem);
  }
}
