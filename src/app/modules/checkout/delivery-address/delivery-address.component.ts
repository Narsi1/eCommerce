import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
})
export class DeliveryAddressComponent implements OnInit {
  @Output() isAddressValid = new EventEmitter<boolean>();

  // Represents the address form group
  addressForm: FormGroup = new FormGroup({});

  // Indicates whether the form has been submitted
  formSubmitted = false;

  // Indicates whether the address form is currently being shown
  showAddressForm = true;

  constructor(private fb: FormBuilder) {
    // Constructor for the DeliveryAddressComponent class.
    // Injects the FormBuilder dependency.
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
    this.initForm();
    this.addressForm.valueChanges.subscribe(() => {
      // Subscribes to value changes in the address form and emits the validity status
      this.isAddressValid.emit(this.addressForm.valid);
    });
    this.isAddressValid.emit(this.addressForm.valid);
  }

  /**
   * @description Initializes the address form with default values and validators.
   */
  initForm(): void {
    this.addressForm = this.fb.group({
      state: ['VIC', Validators.required],
      postcode: ['3000', [Validators.required, Validators.maxLength(4)]],
      fullName: ['John Smith', Validators.required],
      phonenumber: ['0412345678', Validators.required],
      address1: ['street number, name', Validators.required],
      address2: ['suburb', Validators.required],
      city: ['Melbourne', Validators.required],
      email: ['johnsmith@gmail.com', Validators.required],
    });
    console.log(this.addressForm);
  }

  /**
   * @description Sets the delivery address and marks the form as submitted.
   */
  setDeliveryAddress(): void {
    this.formSubmitted = true;
    this.showAddressForm = false;
  }
}
