export declare function getWeatherByRegion(region: string): import("rxjs").Observable<{
    currentWeather: WeatherModel;
}>;
export interface WeatherModel {
    air: string;
    airLevel: string;
    airTips: string;
    city: string;
    cityEn: string;
    cityid: string;
    country: string;
    countryEn: string;
    date: string;
    humidity: string;
    observatoryUpdateTime: string;
    pressure: string;
    tem: string;
    tem1: string;
    tem2: string;
    visibility: string;
    wea: string;
    weaImg: string;
    week: string;
    win: string;
    winMeter: string;
    winSpeed: string;
}
//# sourceMappingURL=weather.d.ts.map