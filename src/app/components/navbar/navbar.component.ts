import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { ICity } from '../../models/icity';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule ,CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  citiesWeather: ICity[] = [];
  filteredCities: ICity[] = [];

  constructor(private _apiWeatherService: ApiWeatherService) {}

  ngOnInit(): void {

    this._apiWeatherService.getAllCitiesForecast().subscribe({
      next: (res) => {
        this.citiesWeather = res;
        this.filteredCities = [];
      },
      error: (err) => {
        console.error('Error fetching cities', err);
      }
    });
  }

  getfiltered(): void {

    if (!this.searchTerm.trim()) {
      this.filteredCities = [];
      return;
    }

    this.filteredCities = this.citiesWeather.filter(x =>
      x.city.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
