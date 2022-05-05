import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  images: string[] = ['../assets/images/WeatherApp.jpg', '../assets/images/RecipeBook.jpg', '../assets/images/FoodMine.jpg'];
}
