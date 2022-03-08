import {request} from './data-store';
import {gql} from 'graphql-request';
export function getWeatherByRegion(region: string) {
  const query = gql`
    query ($region: String!) {
      currentWeather(cityId: $region) {
        city
        cityid
        win
        tem
        temNight
        temDay
        updateTime
        wea
        weaImg
        win
        winSpeed
        winMeter
        air
      }
    }
  `;
  return request<{ currentWeather: WeatherModel }>(query, {region});
}

export interface WeatherModel {
  tem: string;
  cityId: string;
  city: string;
  wea: string;
  weaImg: string;
  temDay: string;
  temNight: string;
  win: string;
  winSpeed: string;
  winMeter: string;
  air: string;
}
