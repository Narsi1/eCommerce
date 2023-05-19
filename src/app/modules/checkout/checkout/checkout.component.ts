import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  addressForm: FormGroup = new FormGroup({});
  creditCardForm: FormGroup = new FormGroup({});
  paymentTypeForm: FormGroup = new FormGroup({});
  formSubmitted = false;
  showAddressForm = true;
  cards = [];
  showCreditCardSection = true;
  showPaypalSection = false;
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initCreditCardForm();
  }
  
  initCards(): void {
    this.cards = [
      {
        type: 'mastercard',
        cardnumber: '0000 0000 0000 0000',
        name: 'John Smith',
        expirydate: '01/2000',
        cvv: '000',
      },
      {
        type: 'visa',
        cardnumber: '0000 0000 0000 1111',
        name: 'John Ray',
        expirydate: '01/2010',
        cvv: '007',
      },
    ] as any;
  }
  setDeliveryAddress(): void {
    this.formSubmitted = true;
    this.showAddressForm = false;
  }
  initCreditCardForm(): void {
    this.creditCardForm = this.formbuilder.group({
      cardnumber: ['0000 0000 0000 0000', Validators.required],
      nameonthecard: ['John Smith', [Validators.required]],
      expirymonth: ['Jan', Validators.required],
      expiryyear: ['2023', Validators.required],
      securitycode: ['000', Validators.required],
    });
  }
  initPaymentTypeForm(): void {
    this.paymentTypeForm = this.formbuilder.group({
      cardnumber: ['0000 0000 0000 0000', Validators.required],
      nameonthecard: ['John Smith', [Validators.required]],
      expirymonth: ['Jan', Validators.required],
      expiryyear: ['2023', Validators.required],
      securitycode: ['000', Validators.required],
    });
  }
}
