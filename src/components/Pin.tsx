import React from "react";
import { Coordinates } from "../types/Coordinates";

import pin from "../assets/pin.png";

export type PinProps = {
  coordinates: Coordinates;
  index?: number;
};

function Pin({ coordinates, index }: PinProps): React.ReactElement {
  return (
    <React.Fragment>
      <img
        height="40px"
        style={{
          position: "absolute",
          top: coordinates.y - 41,
          left: coordinates.x,
        }}
        src={pin}
        alt="pin"
      />
      {index !== undefined && (
        <h1
          style={{
            position: "absolute",
            top: coordinates.y - 60,
            left: coordinates.x,
          }}
        >
          {index + 1}
        </h1>
      )}
    </React.Fragment>
  );
}

export default Pin;
