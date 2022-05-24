import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mannan Portfolio';
  showcontent = false;
  images: string[] = ['../assets/images/WeatherApp.jpg', '../assets/images/RecipeBook.jpg', '../assets/images/FoodMine.jpg'];
  toggle() {
    this.showcontent = !this.showcontent;
  }
  getColor() { return this.showcontent === false ? '#303030' : '#16e0bd'; }

}
