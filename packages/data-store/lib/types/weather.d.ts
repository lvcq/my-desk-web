export declare function getWeatherByRegion(region: string): import("rxjs").Observable<{
    currentWeather: WeatherModel;
}>;
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
//# sourceMappingURL=weather.d.ts.map