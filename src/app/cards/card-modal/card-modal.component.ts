import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { Cart } from 'src/app/models/cart';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cartServices: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private createSnackBar: SnackbarService,

    @Inject(MAT_DIALOG_DATA) public data: Cart
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      title: this.data?.title || '',
      name: [
        this.data?.name || '',
        [Validators.required, Validators.maxLength(50)],
      ],
      phone: [this.data?.phone || '', Validators.required],
      email: [this.data?.email || '', Validators.email],
      adress: this.data?.adress || '',
    });
  }

  addCart(): void {
    this.showSpinner = true;
    this.cartServices.addToCards(this.cardForm.value).subscribe((res) => {
      this.getSuccessMessage('success', 'Ekleme başarılı!');
    });
  }

  updateCart(): void {
    this.showSpinner = true;
    this.cartServices
      .updateCards(this.cardForm.value, this.data.id)
      .subscribe((res: any) => {
        this.getSuccessMessage('success', 'Güncelleme başarılı!');
      });
  }

  deleteCart(): void {
    this.showSpinner = true;
    this.cartServices.deleteCards(this.data.id).subscribe((res) => {
      this.getSuccessMessage('success', 'Silme başarılı!');
    });
  }

  getSuccessMessage(type: string, message: string): void {
    this.createSnackBar.createSnackBar(type, message);
    this.showSpinner = false;
    this.cartServices.getCards();
    this.dialogRef.close(true);
  }
}
