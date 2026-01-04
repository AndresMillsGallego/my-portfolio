import { KeyValues, TiltValues } from "../types/types";

export const defaultTiltValues: TiltValues = {
  x: 0,
  y: 0,
  shadow: "0px 5px 10px rgba(0,0,0,0.2)",
};

export const getTiltValue = (direction: string) => {
  switch (direction) {
    case KeyValues.ARROW_UP:
      return { x: 8, y: 0, shadow: "0px 25px 50px rgba(0,0,0,0.3)" };
    case KeyValues.ARROW_DOWN:
      return { x: -8, y: 0, shadow: "0px 8px 12px rgba(0,0,0,0.45)" };
    case KeyValues.ARROW_LEFT:
      return { x: 0, y: -8, shadow: "-15px 15px 40px rgba(0,0,0,0.25)" };
    case KeyValues.ARROW_RIGHT:
      return { x: 0, y: 8, shadow: "15px 15px 40px rgba(0,0,0,0.25)" };
    default:
      return defaultTiltValues;
  }
};
