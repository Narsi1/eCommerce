import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/shared/services/toast.service';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  formSubmitted = false;
  showAddressForm = true;
  cards = [];
  isAddressFormValid = false;
  isPaymentValid = false;
  constructor(private toast: ToastService, private modalService: NgbModal) {}
  ngOnInit(): void {}

  setDeliveryAddress(): void {
    this.formSubmitted = true;
    this.showAddressForm = false;
  }

  placeOrder(): void {
    if (this.isAddressFormValid === false) {
      this.toast.error('Please enter valid delivery address!!');
    } else if (this.isPaymentValid === false) {
      this.toast.error('Please enter valid payment details!!');
    } else {
      this.toast.success('Order placed');
      const modalRef= this.modalService.open(OrderPlacedComponent);
    }
  }

  updateAddressFormValidity(isFormValid: boolean): void {
    this.isAddressFormValid = isFormValid;
  }
  updatePaymentValid(isValid: boolean): void {
    this.isPaymentValid = isValid;
  }
}
