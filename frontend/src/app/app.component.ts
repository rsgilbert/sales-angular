import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomersModule } from './customers/customers.module';

@Component({
  selector: 'app-root',
//   imports: [RouterOutlet, MatSlideToggleModule,  SidebarComponent, CustomersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sales';
}

