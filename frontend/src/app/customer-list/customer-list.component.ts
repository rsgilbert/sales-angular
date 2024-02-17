import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CustomerListDataSource, CustomerListItem } from './customer-list-datasource';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  standalone: true,
  providers: [CustomerListDataSource, CustomerService],
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class CustomerListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CustomerListItem>;

  constructor(public dataSource: CustomerListDataSource, public customerService: CustomerService) {}

//   dataSource = new MatTableDataSource<CustomerListItem>([{id: 10,name: 'peter'}])


  ngOnInit() {
//     this.customerService.getCustomerList().subscribe(data => {
//         this.dataSource.data = data 
//     })
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
