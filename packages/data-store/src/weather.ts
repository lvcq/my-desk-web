import {request} from './data-store';
import {gql} from 'graphql-request';
export function getWeatherByRegion(region: string) {
  const query = gql`
  query weather($region: String!) {
    currentWeather(cityId: $region) {
      air,
      airLevel,
      airTips,
      city,
      cityid,
      humidity,
      observatoryUpdateTime,
      pressure,
      tem,
      tem1,
      tem2,
      visibility,
      wea,
      weaImg,
      win,
      winMeter,
      winSpeed
    }
  }
  `;
  return request<{ currentWeather: WeatherModel }>(query, {region});
}

export interface WeatherModel {
  /*
   * 空气质量
   */
  air: string;

  /*
   * 空气质量等级
   */
  airLevel: string;

  /*
   * 空气质量描述
   */
  airTips: string;

  /*
   * 城市名称
   */
  city: string;

  /*
   * 城市英文名称
   */
  cityEn: string;

  /*
   * 城市ID
   */
  cityid: string;

  /*
   * 国家名称
   */
  country: string;

  /*
   * 国家英文名称
   */
  countryEn: string;

  /*
   * 当前日期
   */
  date: string;

  /*
   * 湿度
   */
  humidity: string;

  /*
   * 气象台更新时间
   */
  observatoryUpdateTime: string;

  /*
   * 气压hPa
   */
  pressure: string;

  /*
   * 实时温度
   */
  tem: string;

  /*
   * 高温
   */
  tem1: string;

  /*
   * 低温
   */
  tem2: string;

  /*
   * 能见度
   */
  visibility: string;

  /*
   * 天气情况
   */
  wea: string;

  /*
   * 天气对应图标, 固定9种类型(您也可以根据wea字段自己处理): xue、lei、shachen、wu、bingbao、yun、yu、yin、qing
   */
  weaImg: string;

  /*
   * 当前星期
   */
  week: string;

  /*
   * 风向
   */
  win: string;

  /*
   * 风速
   */
  winMeter: string;

  /*
   * 风力等级
   */
  winSpeed: string;
}
