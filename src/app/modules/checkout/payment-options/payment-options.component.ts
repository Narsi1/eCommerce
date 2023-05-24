import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
})
export class PaymentOptionsComponent implements OnInit {
  @Output()isPaymentValid= new EventEmitter<boolean>();
  creditCardForm: FormGroup = new FormGroup({});
  showCreditCardSection = true;
  showPaypalSection = false;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initCreditCardForm();
    this.creditCardForm.valueChanges.subscribe(() => {
      this.isPaymentValid.emit(this.creditCardForm.valid);
    });
    this.isPaymentValid.emit(this.creditCardForm.valid);
  }

  initCreditCardForm(): void {
    this.creditCardForm = this.formBuilder.group({
      cardnumber: ['0000 0000 0000 0000', Validators.required],
      nameonthecard: ['John Smith', [Validators.required]],
      expirymonth: ['Jan', Validators.required],
      expiryyear: ['2023', Validators.required],
      securitycode: ['000', Validators.required],
    });
  }

  displayCreditCardSection(): void {
    this.showCreditCardSection = true;
    this.showPaypalSection = false;
  }

  displayPaymentSection(): void {
    this.showCreditCardSection = false;
    this.showPaypalSection = true;
  }
}
