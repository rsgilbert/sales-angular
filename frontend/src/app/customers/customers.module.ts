import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerService } from './customer.service';



@NgModule({
    exports: [CustomerListComponent, NewCustomerComponent],
    declarations: [
        CustomerListComponent,
        NewCustomerComponent,
    ],
    providers: [CustomerService],
    imports: [
        CommonModule,
      
    ]
})
export class CustomersModule { }
