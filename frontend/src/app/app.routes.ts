import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [
    {
        component: CustomerListComponent,
        path: 'customers',
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    }
];
