import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WEATHER_SLICE_ID, WeatherReducer } from './store/weather.reducer';
import localeFr from '@angular/common/locales/fr';


import { WeatherComponent } from './components/weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherEffects } from './store/weather.effect';

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(WEATHER_SLICE_ID, WeatherReducer),
    EffectsModule.forFeature([WeatherEffects])
  ],
  declarations: [
    WeatherComponent,
    WeatherCardComponent
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {
  constructor() {
  }
}
