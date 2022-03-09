import React, { useEffect, useRef, useState } from "react";
import "../../common.css";
import { getWeatherByRegion, WeatherModel } from "@zly/data-store";
import { Subscription } from "rxjs";
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { getAQICategoryByIndex, AQIInfo, AQIConcernLevels } from '@zly/utils';


Reflect.set(Date.prototype, 'toTemporalInstant', toTemporalInstant);

export interface WeatherPanelProps {
  /* 城市ID */
  cityId: string;
}

export function WeatherPanel({ cityId }: WeatherPanelProps) {

  const [weather, setWeather] = useState<WeatherModel | null>(null);

  const [week] = useState(() => {
    const now = Temporal.Now.plainDateISO();
    const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const index = (now.dayOfWeek + 7) % 7;
    return weeks[index];
  });

  const [aqiInfo, setAqiInfo] = React.useState<AQIInfo>();

  const [date] = useState(() => {
    const now = Temporal.Now.plainDateISO();
    return `${now.month}月${now.day}日`
  })

  const sub = useRef<Subscription | null>(null);

  useEffect(() => {
    sub.current = getWeatherByRegion(cityId).subscribe((res) => {
      setWeather(res.currentWeather);
      const info = getAQICategoryByIndex(Number(res.currentWeather.air));
      setAqiInfo(info);
    });
    return () => {
      sub.current?.unsubscribe();
      sub.current = null;
    };
  }, [cityId]);

  return (
    <div className="w-full h-full text-lg bg-blue-400 p-4 text-white">
      <div className="flex flex-row">
        <div className="">
          <span className="text-32 pr-1 text-2xl">{weather?.city}</span>
          <span>今天: {weather?.wea} {weather?.tem2}~{weather?.tem1}°C</span>
        </div>
        <div className="flex-1"></div>
        <div className="self-center">
          <span>{date}</span>
          <span className="ml-1">{week}</span>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="p-6 text-6xl">{weather?.tem}°</div>
        <div className="">
          <div className="px-4 rounded-full text-base inline-block" style={{
            background: aqiInfo?.color,
            color: (aqiInfo?.level === AQIConcernLevels.MODERATE) ? '#3600ff' : ''
          }}>
            <span>{weather?.air}</span>
            <span className="ml-1">{aqiInfo?.levelText}</span>
          </div>
          <div className="space-x-2 text-base mt-2">
            <span>{weather?.wea}</span>
            <span>{weather?.win}</span>
            <span>{weather?.winSpeed}</span>
          </div>
        </div>
      </div>
      <div className="space-x-4 text-base">
        <span>湿度 {weather?.humidity}</span>
        <span>气压 {weather?.pressure} (hPa)</span>
        <span>能见度 {weather?.visibility}</span>
      </div>
    </div>
  );
}
