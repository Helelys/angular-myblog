import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imgPlaceholder:string = "https://wilsonclinic.com/wp-content/uploads/2018/12/placeholder-logo-2.png"
}
