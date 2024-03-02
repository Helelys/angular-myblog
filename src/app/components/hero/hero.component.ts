import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input()
  heroImg:string = "https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Hero-Banner-Placeholder-Dark-2500x1172-1.png"

  @Input()
  textoPlaceholder:string = "Titulo"

  @Input()
  subtextoPlaceholder:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero ipsum, molestie id ipsum eu, auctor suscipit odio. Nulla sit amet consectetur nulla. Fusce et quam at magna lacinia vehicula."
}
