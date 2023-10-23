import React = require("react");

import {
  Depths,
  FontSizes,
  MotionAnimations,
  MotionDurations,
  NeutralColors,
} from "@fluentui/react";

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

import { formatWeatherType, getWeekday } from "../../helpers/helpers";

const weatherBoxStyles: React.CSSProperties = {
  width: "250px",
  height: "300px",
  float: "left",
  borderWidth: "0.3px",
  borderColor: "#0000",
  borderStyle: "solid",
  borderRadius: "0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: Depths.depth16,
  margin: "2rem 1rem 9rem 1rem",
  backgroundColor: NeutralColors.gray30,
};

const headerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  animation: MotionAnimations.slideDownIn,
  animationDuration: MotionDurations.duration2,
};

const headerTextStyles: React.CSSProperties = {
  fontSize: FontSizes.size24,
  textTransform: "uppercase",
  margin: "0",
};

const temperatureStyles: React.CSSProperties = {
  fontSize: FontSizes.size28,
  fontWeight: "800",
  animation: MotionAnimations.slideDownIn,
  animationDuration: MotionDurations.duration3,
};

const weatherTypeTemperatureStyles: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "1.5rem",
};

const footerStyles: React.CSSProperties = {
  textAlign: "center",
  letterSpacing: "0.3rem",
  animation: MotionAnimations.slideUpIn,
  animationDuration: MotionDurations.duration4,
};

type Props = {
  weatherApiData: any[];
};

export const AppWeatherApiBox = ({ weatherApiData }: Props) => {
  console.log(weatherApiData);
  return (
    <div>
      {weatherApiData.splice(0, 5).map((m, i) => (
        <div key={i} style={weatherBoxStyles}>
          <header style={headerStyles}>
            <h4 style={headerTextStyles}>{getWeekday(m.day)}</h4>
            <p>
              {new Date(m.day).toLocaleString("cs", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              })}
            </p>
          </header>
          <section>
            <div style={weatherTypeTemperatureStyles}>
              {(() => {
                switch (m.all_day.icon) {
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
              })()}
            </div>
            <h3 style={temperatureStyles}>{m.all_day.temperature}C°</h3>
          </section>
          <footer style={footerStyles}>
            {formatWeatherType(m.all_day.weather)}
          </footer>
        </div>
      ))}
    </div>
  );
};
