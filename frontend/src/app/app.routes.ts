import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

export const routes: Routes = [
    {
        component: CustomerListComponent,
        path: 'customers',
    },
    {
        component: NewCustomerComponent,
        path: 'customers/new',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    }
];
