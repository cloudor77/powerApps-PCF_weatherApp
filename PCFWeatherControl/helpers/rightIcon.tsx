import React = require("react");
import { WeatherType } from "../src/components/App";
import { v4 as uuidv4 } from "uuid";
import {
  SharedColors,
  MotionAnimations,
  MotionDurations,
} from "@fluentui/react";
uuidv4();

import {
  WeatherPartlyCloudyDay48Regular,
  WeatherSunny48Regular,
  WeatherSnow48Regular,
  WeatherRainSnow48Regular,
  WeatherCloudy48Regular,
} from "@fluentui/react-icons";

export const cloudyDay = <WeatherCloudy48Regular key="whatever" />;

const iconsSharedStyles: React.CSSProperties = {
  width: "60px",
  height: "60px",
  overflow: "hidden",
  animation: MotionAnimations.slideDownIn,
  animationDuration: MotionDurations.duration3,
};

const cloudyStyles: React.CSSProperties = {
  color: SharedColors.gray30,
};

const sunnyStyles: React.CSSProperties = {
  color: SharedColors.orangeYellow20,
};

const snowStyles: React.CSSProperties = {
  color: "fffafa",
};

const rainSnowStyles: React.CSSProperties = {
  color: SharedColors.cyan10,
};

const partlyCloudyStyles: React.CSSProperties = {
  color: SharedColors.gray10,
};

const iconMap = {
  Cloudy: (
    <WeatherCloudy48Regular
      key={uuidv4()}
      style={{ ...iconsSharedStyles, ...cloudyStyles }}
    />
  ),
  Sunny: (
    <WeatherSunny48Regular
      key={uuidv4()}
      style={{ ...iconsSharedStyles, ...sunnyStyles }}
    />
  ),
  Snow: (
    <WeatherSnow48Regular
      key={uuidv4()}
      style={{ ...iconsSharedStyles, ...snowStyles }}
    />
  ),
  RainSnow: (
    <WeatherRainSnow48Regular
      key={uuidv4()}
      style={{ ...iconsSharedStyles, ...rainSnowStyles }}
    />
  ),
  PartlyCloudyDay: (
    <WeatherPartlyCloudyDay48Regular
      key={uuidv4()}
      style={{ ...iconsSharedStyles, ...partlyCloudyStyles }}
    />
  ),
};

export const pickRightIcon = (icon: any) => {
  const rightIcon = Object.values(WeatherType);
  const iconMapValues = Object.values(iconMap);

  const icons = rightIcon.map((m, i) => {
    if (icon === m) {
      return iconMapValues[i];
    }
  });
  return icons;
};
