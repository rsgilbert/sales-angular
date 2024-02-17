import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { CustomerListItem, CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-new-customer',
    styleUrls: ['./new-customer.component.scss',],
    templateUrl: './new-customer.component.html',
})
export class NewCustomerComponent {
    constructor(
        private customerService: CustomerService,
        private router: Router
    ) {

    }

    private fb = inject(FormBuilder);
    customerForm = this.fb.group({
        _id: [null, Validators.required],
        name: [null, Validators.required],
        email: null,
        phoneNumber: null,
    });

    hasUnitNumber = false;

    isSubmitting = false;

    async onSubmit(): Promise<void> {
        this.isSubmitting = true;
        this.customerForm.disable()
        const customer: CustomerListItem = this.customerForm.value as any
        this.customerService.createCustomer(customer).subscribe({
            complete: () => {
                console.log('created customer')
                this.router.navigateByUrl('/customers')
            },
            error: (err) => {
                console.log('an error happened, stopping submission')
                console.error(err)
                this.isSubmitting = false;
                this.customerForm.enable()
            }
        })

    }
}
