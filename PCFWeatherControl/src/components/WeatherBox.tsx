import {
  Depths,
  FontSizes,
  MotionAnimations,
  MotionDurations,
  NeutralColors,
} from "@fluentui/react";
import React = require("react");
import { IWeatherData } from "./App";
import { pickRightIcon } from "../../helpers/rightIcon";
import { getFormattedDate, getWeekday } from "../../helpers/helpers";

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
  justifyContent: "space-around",
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
  letterSpacing: "0.05rem",
  animation: MotionAnimations.slideDownIn,
  animationDuration: MotionDurations.duration3,
};

const weatherTypeTemperatureStyles: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "1.5rem",
};

const footerStyles: React.CSSProperties = {
  textAlign: "center",
  animation: MotionAnimations.slideUpIn,
  animationDuration: MotionDurations.duration4,
};

export interface WeatherBoxWeatherData {
  weatherData: IWeatherData[];
}
export const WeatherBox: React.FC<WeatherBoxWeatherData> = ({
  weatherData,
}: WeatherBoxWeatherData) => {
  const WeatherBoxContent = weatherData.map((w, i) => (
    <div key={i} style={weatherBoxStyles}>
      <header style={headerStyles}>
        <h4 style={headerTextStyles}>{getWeekday(w.date)}</h4>
        <p>{getFormattedDate("cs-CZ", w.date)}</p>
      </header>
      <section>
        <div style={weatherTypeTemperatureStyles}>
          {pickRightIcon(w.weatherType)}
        </div>
        <h3 style={temperatureStyles}>{w.temperature}C°</h3>
      </section>
      <footer style={footerStyles}>{w.weatherType}</footer>
    </div>
  ));

  return <div>{WeatherBoxContent}</div>;
};

export default WeatherBox;
