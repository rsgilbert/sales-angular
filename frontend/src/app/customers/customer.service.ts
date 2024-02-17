import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const apiBaseUrl = 'http://localhost:3005'

export interface CustomerListItem {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
}



@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private httpClient: HttpClient) { }

    getCustomerList(): Observable<CustomerListItem[]> {
        const result = this.httpClient.get<CustomerListItem[]>(`${apiBaseUrl}/customers`)
        console.log(result)
        return result;
    }

    createCustomer(customer: CustomerListItem): Observable<any> {
        const url = apiBaseUrl + '/customers'
        return this.httpClient.post(url, customer)
    }


}
