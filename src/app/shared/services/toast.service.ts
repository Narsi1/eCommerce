import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Interface for defining the toast information
export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  /**
   * Displays a success toast message.
   * @param message The success message to display.
   */
  success(message: string) {
    this.toastr.success(message);
  }

  /**
   * Displays an error toast message.
   * @param message The error message to display.
   */
  error(message: string) {
    this.toastr.error(message);
  }
}
