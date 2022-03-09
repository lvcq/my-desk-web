var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { request } from './data-store';
import { gql } from 'graphql-request';
export function getWeatherByRegion(region) {
    var query = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query weather($region: String!) {\n    currentWeather(cityId: $region) {\n      air,\n      airLevel,\n      airTips,\n      city,\n      cityid,\n      humidity,\n      observatoryUpdateTime,\n      pressure,\n      tem,\n      tem1,\n      tem2,\n      visibility,\n      wea,\n      weaImg,\n      win,\n      winMeter,\n      winSpeed\n    }\n  }\n  "], ["\n  query weather($region: String!) {\n    currentWeather(cityId: $region) {\n      air,\n      airLevel,\n      airTips,\n      city,\n      cityid,\n      humidity,\n      observatoryUpdateTime,\n      pressure,\n      tem,\n      tem1,\n      tem2,\n      visibility,\n      wea,\n      weaImg,\n      win,\n      winMeter,\n      winSpeed\n    }\n  }\n  "])));
    return request(query, { region: region });
}
var templateObject_1;
//# sourceMappingURL=weather.js.map