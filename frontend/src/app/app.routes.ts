import { Routes } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

export const routes: Routes = [
    {
        component: CustomerListComponent,
        path: 'customers',
    },
    {
        component: NewCustomerComponent,
        path: 'customers/new',
    },
    {
        component: EditCustomerComponent,
        path: 'customers/:id',
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    }
];
