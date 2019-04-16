import {Action} from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';

import { Weather } from '../weather.model';

export const GET_WEATHER_DATA = '[WEATHER] Get Data';
export const GET_WEATHER_DATA_SUCCESS = '[WEATHER] Get Data Success';
export const GET_WEATHER_DATA_FAILURE = '[WEATHER] Get Data Failure';

export class GetWeatherData implements Action {
  readonly type = GET_WEATHER_DATA;
}

export class GetWeatherDataSuccess implements Action {
    readonly type = GET_WEATHER_DATA_SUCCESS;

    constructor(public payload: Weather) {}
}

export class GetWeatherDataFailure implements Action {
    readonly type = GET_WEATHER_DATA_FAILURE;

    constructor(public payload: HttpErrorResponse) {}
}

export type WeatherActions = GetWeatherData | GetWeatherDataSuccess | GetWeatherDataFailure;