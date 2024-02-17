import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CustomerListDataSource, CustomerListItem } from './customer-list-datasource';
import { CustomerService } from '../customer.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrl: './customer-list.component.scss',
    standalone: true,
    providers: [CustomerListDataSource, CustomerService],
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbar,
        MatIcon,
        MatIconButton,
        RouterModule,
        MatAnchor,
        MatToolbar
    ]
})
export class CustomerListComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<CustomerListItem>;

    constructor(public customerService: CustomerService) { }

    dataSource = new MatTableDataSource<CustomerListItem>([])


    ngOnInit() {
        this.customerService.getCustomerList().subscribe(data => {
            this.dataSource.data = data
        })
    }

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'phoneNumber', 'email'];

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
