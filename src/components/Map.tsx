import React, { useState } from "react";
import { Coordinates } from "../types/Coordinates";

import map from "../assets/map.png";

export type MapProps = {
  onMapClick: (coordinates: Coordinates) => void;
};

function Map({ onMapClick }: MapProps): React.ReactElement {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const _onMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    setCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const _onMouseClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    onMapClick(coordinates);
  };

  return (
    <React.Fragment>
      <img
        className="map"
        src={map}
        alt="map"
        onMouseMove={_onMouseMove}
        onClick={_onMouseClick}
      />
    </React.Fragment>
  );
}

export default Map;
