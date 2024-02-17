import { Component, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatProgressBar } from '@angular/material/progress-bar'
import { CustomerListItem, CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';


@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
})
export class EditCustomerComponent implements OnInit {
    customer$: Observable<CustomerListItem> | undefined;

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.customer$ = this.customerService.getCustomerById(params['id']);
            this.customer$.subscribe(cust => {
                this.customerForm = this.fb.group({
                    _id: [cust._id, Validators.required],
                    name: [cust.name, Validators.required],
                    email: cust.email,
                    phoneNumber: cust.phoneNumber,
                });
            })
        })
    }


    private fb = inject(FormBuilder);
    customerForm = this.fb.group({
        _id: ['', Validators.required],
        name: ['', Validators.required],
        email: '',
        phoneNumber: '',
    });

    hasUnitNumber = false;

    isSubmitting = false;

    async onSubmit(): Promise<void> {
        this.isSubmitting = true;
        this.customerForm.disable()
        const customer: CustomerListItem = this.customerForm.value as any
        this.customerService.updateCustomer(customer).subscribe({
            complete: () => {
                console.log('updated customer', customer._id)
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
