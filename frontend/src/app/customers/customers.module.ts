import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerService } from './customer.service';
import { MatIconButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatActionList, MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';


//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    exports: [CustomerListComponent],
    declarations: [
        CustomerListComponent,
        EditCustomerComponent,
        NewCustomerComponent,
    ],
    providers: [CustomerService],
    imports: [
        CommonModule,
        MatTableModule,
        MatCardActions,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        RouterModule,
        MatAnchor,
        MatIcon,
        MatToolbar,
        MatCardActions,
        MatActionList,
        MatCardModule,
        MatButtonModule,
        MatProgressBar,
        MatFormFieldModule,
        MatIconButton,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        // see: https://stackoverflow.com/a/46795510/10030693
        MatInputModule,

        // for all material modules, see : https://gist.github.com/pimatco/d5b1891feb90b60ca4681011b6513873
        MatCheckboxModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
        
    ]
})
export class CustomersModule { }
