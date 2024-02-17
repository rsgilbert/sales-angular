import { Component, inject } from '@angular/core';

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


@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrl: './edit-customer.component.scss',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        MatToolbar,
        MatProgressBar
    ]
})
export class EditCustomerComponent {
    constructor(
        private customerService: CustomerService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.customerId = params["id"];
        })
    }

    customerId: string | undefined;

    // ngOnInit() {

    // }

    private fb = inject(FormBuilder);
    customerForm = this.fb.group({
        _id: [null, Validators.required],
        name: [null, Validators.required],
        email: null,
        phoneNumber: null,
        company: null,

        postalCode: [null, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(5)])
        ],
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
