var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { request } from "./data-store";
import { gql } from "graphql-request";
export function getWeatherByRegion(region) {
    var query = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query ($region: String!) {\n      currentWeather(cityId: $region) {\n        city\n        cityid\n        win\n        tem\n        temNight\n        temDay\n        updateTime\n        wea\n        weaImg\n        win\n        winSpeed\n        winMeter\n        air\n      }\n    }\n  "], ["\n    query ($region: String!) {\n      currentWeather(cityId: $region) {\n        city\n        cityid\n        win\n        tem\n        temNight\n        temDay\n        updateTime\n        wea\n        weaImg\n        win\n        winSpeed\n        winMeter\n        air\n      }\n    }\n  "])));
    return request(query, { region: region });
}
var templateObject_1;
//# sourceMappingURL=weather.js.map