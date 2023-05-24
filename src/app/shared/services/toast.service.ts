import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  success(message: string) {
    this.toastr.success(message);
  }

  error(message: string) {
    this.toastr.error(message);
  }
}
