import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast:any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showToast(msg:string,isSuccess:boolean= true){
      this.show(msg, (isSuccess)? { classname: 'bg-success text-light', delay: 5000 } 
      : { classname: 'bg-danger text-light', delay: 5000 });
  }
}