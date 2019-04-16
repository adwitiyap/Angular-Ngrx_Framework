import { Component, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'wdsk-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnChanges {

  @Input("currentTemp") currentTemp: string;
  @Input("feelsLikeTemp") feelsLikeTemp: string;
  @Input("day") day: string;
  @Input("type") type: string;
  @Input("picUrl") picUrl: string;

  constructor() { }

  ngOnChanges() {

  }

}
