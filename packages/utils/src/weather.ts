/**
 * Some utils for weather
 */


/**
 * AQI(air quality index) levels of concern enum.     
 * The AQI divided into six categories.       
 * Each category corresponds to a different level of health concern.        
 * Each category also has a specific color.
 *      
 * |Daily AQI Color|Levels of Concern|Values of Index|Description of Air Quality|
 * |:--------------:|:--------------:|:--------------:|:--------------|
 * | Green|Good|0 to 50|Air quality is satisfactory, and air pollution poses little or no risk.|
 * | Yellow	|Moderate	|51 to 100	|Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.|
 * | Orange	|Unhealthy for Sensitive Groups|	101 to 150	|Members of sensitive groups may experience health effects. The general public is less likely to be affected.|
 * | Red	|Unhealthy	|151 to 200	|Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.|
 * | Purple	|Very Unhealthy	|201 to 300	|Health alert: The risk of health effects is increased for everyone.|
 * | Maroon	|Hazardous	|301 and higher	|Health warning of emergency conditions: everyone is more likely to be affected.|
 * 
 * 
 */
export enum AQIConcernLevels {
    GOOD,
    MODERATE,
    UNHEALTHY_FOR_SENSITIVE_GROUPS,
    UNHEALTHY,
    VERY_UNHEALTHY,
    HAZARDOUS
}

type AQIColors = "#00e400" | "yellow" | "#ff7e00" | "red" | "#8f3f97" | "#7e0023";


export interface AQIInfo {
    level: AQIConcernLevels;
    color: AQIColors;
    levelText: string;
}

const AQIRef: { [key: string]: { color: AQIColors, levelText: string } } = {
    [AQIConcernLevels.GOOD]: {
        color: "#00e400",
        levelText: "优"

    },
    [AQIConcernLevels.MODERATE]: {
        color: "yellow",
        levelText: "良"
    },
    [AQIConcernLevels.UNHEALTHY_FOR_SENSITIVE_GROUPS]: {
        color: "#ff7e00",
        levelText: "轻度污染"
    },
    [AQIConcernLevels.UNHEALTHY]: {
        color: "red",
        levelText: "中度污染"
    },
    [AQIConcernLevels.VERY_UNHEALTHY]: {
        color: "#8f3f97",
        levelText: "重度污染"

    },
    [AQIConcernLevels.HAZARDOUS]: {
        color: '#7e0023',
        levelText: "严重污染"
    }
}


/**
 * According to the giving value, find the AQI info.
 * @param val 
 * @returns 
 */
export function getAQICategoryByIndex(val: number):AQIInfo {
    let level: AQIConcernLevels;
    if (val <= 50) {
        level = AQIConcernLevels.GOOD;
    }else if(val<=100){
        level = AQIConcernLevels.MODERATE;
    }else if(val<=150){
        level = AQIConcernLevels.UNHEALTHY_FOR_SENSITIVE_GROUPS;
    }else if (val<=200){
        level = AQIConcernLevels.UNHEALTHY;
    }else if (val<=300){
        level = AQIConcernLevels.VERY_UNHEALTHY;
    }else{
        level = AQIConcernLevels.HAZARDOUS;
    }
    return {
        level,
        ...AQIRef[level]
    }
}