import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mannan Portfolio';
  images: string[] = ['../assets/images/WeatherApp.jpg', '../assets/images/RecipeBook.jpg', '../assets/images/FoodMine.jpg'];
}
