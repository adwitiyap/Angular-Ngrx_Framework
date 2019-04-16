import { ActionReducer, Action, createFeatureSelector } from '@ngrx/store';
import * as WeatherActions from './weather.action';

import { Weather } from '../weather.model';

export const WEATHER_SLICE_ID = 'weather';

export const getWeatherData = createFeatureSelector<WeatherState>(WEATHER_SLICE_ID);

export interface WeatherState {
    data: Weather,
    isLoading: boolean,
    isLoaded: boolean
}

export const initialState: WeatherState = {
    data: {
        city: 'Toronto',
        province: 'On',
        timestamp: 'Thu Apr 4 12:25 PM',
        temp: '2',
        feelsLike: '-2',
        weatherDesc: 'Partly cloudy',
        days: []
    },
    isLoading: false,
    isLoaded: false
  };

export function WeatherReducer(state = initialState, action: WeatherActions.WeatherActions): WeatherState {
  switch (action.type) {

    case WeatherActions.GET_WEATHER_DATA:
        return {
            ...state,
            isLoading: false,
            isLoaded: true
        }

    case WeatherActions.GET_WEATHER_DATA_SUCCESS:
        return {
            data: { ...action.payload },
            isLoading: false,
            isLoaded: true
        }
        

    default:
      return state;
  }
}