"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherByRegion = void 0;
var data_store_1 = require("./data-store");
var graphql_request_1 = require("graphql-request");
function getWeatherByRegion(region) {
    var query = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query ($region: String!) {\n      currentWeather(cityId: $region) {\n        city\n        cityid\n        win\n        tem\n        temNight\n        temDay\n        updateTime\n        wea\n        weaImg\n        win\n        winSpeed\n        winMeter\n        air\n      }\n    }\n  "], ["\n    query ($region: String!) {\n      currentWeather(cityId: $region) {\n        city\n        cityid\n        win\n        tem\n        temNight\n        temDay\n        updateTime\n        wea\n        weaImg\n        win\n        winSpeed\n        winMeter\n        air\n      }\n    }\n  "])));
    return (0, data_store_1.request)(query, { region: region });
}
exports.getWeatherByRegion = getWeatherByRegion;
var templateObject_1;
