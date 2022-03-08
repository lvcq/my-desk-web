import React, { useEffect, useRef, useState } from "react";
import "../../common.css";
import { getWeatherByRegion, WeatherModel } from "@zly/data-store";
import { Subscription } from "rxjs";
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';


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
  const [date] = useState(() => {
    const now = Temporal.Now.plainDateISO();
    return `${now.month}月${now.day}日`
  })
  const sub = useRef<Subscription | null>(null);

  useEffect(() => {
    sub.current = getWeatherByRegion(cityId).subscribe((res) => {
      setWeather(res.currentWeather);
    });
    return () => {
      sub.current?.unsubscribe();
    };
  }, [cityId]);

  return (
    <div className="w-full h-full text-lg">
      <div className="flex flex-row">
        <div className="">
          <span className="text-32">{weather?.city}</span>
          <span>今天: {weather?.wea} {weather?.temNight}~{weather?.temDay}°C</span>
          <span>{weather?.win}</span>
        </div>
        <div className="flex-1"></div>
        <div className="">
          <span>{date}</span>
          <span>{week}</span>
        </div>
      </div>
    </div>
  );
}
