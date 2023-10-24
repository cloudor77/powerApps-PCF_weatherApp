import React = require("react");

import {
  WeatherSunny48Filled,
  WeatherSunnyHigh48Regular,
  WeatherSunnyLow48Regular,
  WeatherPartlyCloudyDay48Regular,
  WeatherCloudy48Regular,
  WeatherFog48Filled,
  WeatherRain48Regular,
  WeatherRainShowersDay48Filled,
  WeatherRainSnow48Regular,
  WeatherSnow48Regular,
  WeatherSnowflake48Regular,
  WeatherThunderstorm48Regular,
  WeatherDrizzle48Filled,
  ErrorCircle24Regular,
  WeatherCloudy48Filled,
  Drop48Filled,
  WeatherSnowflake48Filled,
} from "@fluentui/react-icons";

export const weatherAPIcon = (iconNum: number) => {
  switch (iconNum) {
    case 1:
      return <ErrorCircle24Regular />;
    case 2:
      return <WeatherSunny48Filled />;
    case 3:
      return <WeatherSunnyHigh48Regular />;
    case 4:
      return <WeatherSunnyLow48Regular />;
    case 5:
      return <WeatherPartlyCloudyDay48Regular />;
    case 6:
      return <WeatherCloudy48Regular />;
    case 7:
      return <WeatherCloudy48Filled />;
    case 8:
      return <WeatherPartlyCloudyDay48Regular />;
    case 9:
      return <WeatherFog48Filled />;
    case 10:
      return <WeatherDrizzle48Filled />;
    case 11:
      return <WeatherRain48Regular />;
    case 12:
      return <Drop48Filled />;
    case 13:
      return <WeatherRainShowersDay48Filled />;
    case 14:
      return <WeatherThunderstorm48Regular />;
    case 15:
      return <WeatherThunderstorm48Regular />;
    case 16:
      return <WeatherSnowflake48Regular />;
    case 17:
      return <WeatherSnowflake48Filled />;
    case 18:
      return <WeatherSnow48Regular />;
    case 19:
      return <WeatherRainSnow48Regular />;
    case 20:
      return <WeatherRainSnow48Regular />;
    default:
      return <WeatherCloudy48Regular />;
  }
};
