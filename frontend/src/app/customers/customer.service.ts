import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';


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

    getCustomerById(_id: string) :  Observable<CustomerListItem> {
        const url = apiBaseUrl + '/customers/' + _id;
        return this.httpClient.get<CustomerListItem>(url)
    }

    updateCustomer(customer: CustomerListItem): Observable<any> {
        const url = apiBaseUrl + '/customers/' + customer._id
        return this.httpClient.put(url, customer)
    }

    // private getCustomerByIdFromList(_id: string): Observable<CustomerListItem | undefined> {
    //     return this.getCustomerList().pipe(map(customerList =>
    //         customerList.find(c => c._id === _id)
    //     ))
    // }


}
