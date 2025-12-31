import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from "./Component/user/user.component";
import { DataBindingComponent } from "./Component/data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_prep';
}
