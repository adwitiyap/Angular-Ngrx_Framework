import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { WeatherState, getWeatherData } from '../store/weather.reducer'
import { GetWeatherData } from '../store/weather.action';

@Component({
  selector: 'wdsk-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private location: {
    city: string;
    province: string;
    timestamp: string;
    temp: string;
    feelsLike: string;
    weatherDesc: string;
    days: {}[];
  };
  

  constructor(private store: Store<WeatherState>) { }

  ngOnInit() {
    this.store.dispatch(new GetWeatherData());

    this.store.select(getWeatherData).subscribe(data => {
      this.location = data.data;
    });
  }

}
