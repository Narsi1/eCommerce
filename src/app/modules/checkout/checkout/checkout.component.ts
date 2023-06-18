import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/shared/services/toast.service';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // Indicates whether the form has been submitted
  formSubmitted = false;

  // Indicates whether the address form is currently being shown
  showAddressForm = true;

  // Indicates the validity of the address form
  isAddressFormValid = false;

  // Indicates the validity of the payment
  isPaymentValid = false;

  constructor(private toast: ToastService, private modalService: NgbModal) {
    // Constructor for the CheckoutComponent class.
    // Injects the ToastService and NgbModal dependencies.
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
  }

  /**
   * @description Sets the delivery address and marks the form as submitted.
   */
  setDeliveryAddress(): void {
    this.formSubmitted = true;
    this.showAddressForm = false;
  }

  /**
   * @description Places an order based on the validity of the address form and payment details.
   * Displays appropriate toast messages and opens the OrderPlacedComponent modal if the order is valid.
   */
  placeOrder(): void {
    if (this.isAddressFormValid === false) {
      this.toast.error('Please enter a valid delivery address!');
    } else if (this.isPaymentValid === false) {
      this.toast.error('Please enter valid payment details!');
    } else {
      this.toast.success('Order placed');
      this.modalService.open(OrderPlacedComponent);
    }
  }

  /**
   * @description Updates the validity of the address form based on the parameter value.
   * @param isFormValid Boolean value indicating the validity of the address form.
   */
  updateAddressFormValidity(isFormValid: boolean): void {
    this.isAddressFormValid = isFormValid;
  }

  /**
   * @description Updates the validity of the payment based on the parameter value.
   * @param isValid Boolean value indicating the validity of the payment details.
   */
  updatePaymentValid(isValid: boolean): void {
    this.isPaymentValid = isValid;
  }
}
