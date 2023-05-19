import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  // Input from parent
  @Input() addressForm: FormGroup = new FormGroup({});

  formSubmitted = false;
  showAddressForm = true;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.initForm();
  }

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

  setDeliveryAddress(): void {
    this.formSubmitted = true;
    this.showAddressForm = false;
  }

}
