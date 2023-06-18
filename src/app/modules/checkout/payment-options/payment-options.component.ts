import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
})
export class PaymentOptionsComponent implements OnInit {
  @Output() isPaymentValid = new EventEmitter<boolean>();

  // Represents the credit card form
  creditCardForm: FormGroup = new FormGroup({});

  // Determines whether the credit card section should be displayed
  showCreditCardSection = true;

  // Determines whether the PayPal section should be displayed
  showPaypalSection = false;

  // Tracks whether the form has been submitted
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
    // Initializes the credit card form and sets up form value change subscription.
    this.initCreditCardForm();
    this.creditCardForm.valueChanges.subscribe(() => {
      this.isPaymentValid.emit(this.creditCardForm.valid);
    });
    this.isPaymentValid.emit(this.creditCardForm.valid);
  }

  /**
   * @description Initializes the credit card form with default values and validators.
   */
  initCreditCardForm(): void {
    this.creditCardForm = this.formBuilder.group({
      cardnumber: ['0000 0000 0000 0000', Validators.required],
      nameonthecard: ['John Smith', [Validators.required]],
      expirymonth: ['Jan', Validators.required],
      expiryyear: ['2023', Validators.required],
      securitycode: ['000', Validators.required],
    });
  }

  /**
   * @description Displays the credit card section and hides the PayPal section.
   */
  displayCreditCardSection(): void {
    this.showCreditCardSection = true;
    this.showPaypalSection = false;
  }

  /**
   * @description Displays the PayPal section and hides the credit card section.
   */
  displayPaymentSection(): void {
    this.showCreditCardSection = false;
    this.showPaypalSection = true;
  }
}
