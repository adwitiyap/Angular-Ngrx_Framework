import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import * as WeatherActions from './weather.action';

@Injectable()
export class WeatherEffects {

    constructor(private actions$: Actions){
    }

    getData() {
        return of({
            city: 'Toronto',
            province: 'On',
            timestamp: 'Thu Apr 4 12:25 PM',
            temp: '2',
            feelsLike: '-2',
            weatherDesc: 'Partly cloudy',
            days: [
              { day: 'THU AFTERNOON', type: 'SUNNY', currentTemp: '2', feelsLikeTemp: '-2', picUrl: 'https://picsum.photos/100/100' }, 
              { day: 'THU EVENING', type: 'CLOUDY', currentTemp: '-1', feelsLikeTemp: '-5', picUrl: 'https://picsum.photos/100/100' },
              { day: 'FRI EVENING', type: 'SUNNY', currentTemp: '-18', feelsLikeTemp: '-15', picUrl: 'https://picsum.photos/100/100' },
              { day: 'FRI EVENING', type: 'Cloudy', currentTemp: '6', feelsLikeTemp: '1', picUrl: 'https://picsum.photos/100/100' }]
          });
    }

    @Effect()
    loadWeatherData$ = this.actions$.pipe(
      ofType(WeatherActions.GET_WEATHER_DATA),
      mergeMap(() => { 
        return this.getData()
        .pipe(
          map(data => {
            return {
              type: WeatherActions.GET_WEATHER_DATA_SUCCESS, 
              payload: data 
            };
          }),
          catchError((e: HttpErrorResponse) => {
            return of({
              type: WeatherActions.GET_WEATHER_DATA_FAILURE,
              payload: e
            })
          })
        )
        })
      );
      
        
  
}