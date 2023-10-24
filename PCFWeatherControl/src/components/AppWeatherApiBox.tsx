import React = require("react");

import {
  Depths,
  FontSizes,
  MotionAnimations,
  MotionDurations,
  NeutralColors,
} from "@fluentui/react";

import {
  formatWeatherType,
  getWeekday,
  getFormattedDate,
} from "../../helpers/helpers";

import { weatherAPIcon } from "../../helpers/weatherApiIcons";

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

export interface ApiWeatherProps {
  date: string;
  weather: string;
  temp: number;
  icon: number;
}

export interface ApiWeatherProps {
  date: string;
  weather: string;
  temp: number;
  icon: number;
}

export const AppWeatherApiBox = (props: ApiWeatherProps) => {
  return (
    <div style={weatherBoxStyles}>
      <header style={headerStyles}>
        <h4 style={headerTextStyles}>{getWeekday(new Date(props.date))}</h4>
        <p>{getFormattedDate("cs", new Date(props.date))} </p>
      </header>
      <section>
        <div style={weatherTypeTemperatureStyles}>
          {weatherAPIcon(props.icon)}
        </div>
        <h3 style={temperatureStyles}>{`${props.temp.toFixed(0)}°C`}</h3>
      </section>
      <footer style={footerStyles}>{formatWeatherType(props.weather)}</footer>
    </div>
  );
};
