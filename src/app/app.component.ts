import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./new-component/new-component.component";
import { ProductspecificsComponent } from "./productspecifics/productspecifics.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponentComponent, ProductspecificsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Anitha';
  Count = 10;
}
