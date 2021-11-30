import { parse as convertDuration } from "tinyduration";

const DATE_UNITS = [
  ["year", 31536000],
  ["month", 2628000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const UNITS_IN_PLURAL = DATE_UNITS.filter(([unit]) => unit !== "week").map(
  ([unit, seconds]) => [unit + "s"]
);
const VALUES = [["y-"], ["m-"], ["d "], [":"], [":"], [""]];

const DATE_STRINGS = UNITS_IN_PLURAL.map(([unit], index) => [
  unit,
  VALUES[index][0],
]);

const getDateDiff = (timestamp) => {
  const now = Date.now();
  const diff = (now - new Date(timestamp)) / 1000;
  for (const [unit, seconds] of DATE_UNITS) {
    if (diff > seconds) {
      return {
        unit,
        value: Math.floor(diff / seconds) * -1,
      };
    }
  }
};

const convertDurationToTime = (timestamp) => {
  const time = convertDuration(timestamp);
  let str = "";
  for (const [unitTime, value] of Object.entries(time)) {
    const [, unitString] = DATE_STRINGS.find(([unit]) => unitTime === unit);
    if (value === 0) continue;

    str +=
      value > 0 && value < 10
        ? `0${value}${unitString}`
        : `${value}${unitString}`;
  }

  return str;
};

function useTime(timestamp, { duration = false } = {}) {
  if (!duration) {
    const { value, unit } = getDateDiff(timestamp);
    const rtf = new Intl.RelativeTimeFormat(navigator.language, {
      style: "long",
    });
    return rtf.format(value, unit);
  }

  return convertDurationToTime(timestamp);
}

export default useTime;
