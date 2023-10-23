const daysInTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getFormattedDate = (locale: string, date: Date | any) => {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  }).format(date);
};

export const getWeekday = (date: Date) => {
  if (typeof date === "string") {
    const turningToISO = new Date(date);
    return daysInTheWeek[turningToISO.getDay()];
  }
  return daysInTheWeek[date.getDay()];
};

export const formatWeatherType = (str: string) => {
  return str.replace("_", " ").toUpperCase();
};
