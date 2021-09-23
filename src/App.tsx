// import React, { useState } from "react";
// import "./App.css";

// import map from "./assets/map.png";
// import pin from "./assets/pin.png";

// type Coordinates = {
//   x: number;
//   y: number;
// };

// function Test(): React.ReactElement {
//   const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
//   const [pinCoordinates, setPinCoordinates] = useState<Coordinates>({
//     x: -100,
//     y: -100,
//   });

//   const _onMouseMove = (e: any) => {
//     setCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
//   };

//   const _onMouseClick = (e: any) => {
//     setPinCoordinates(coordinates);
//   };

//   return (
//     <div>
//       <h1 className="info">
//         {coordinates.x} {coordinates.y}
//       </h1>
//       <div className="map-area">
//         <img
//           className="map"
//           onMouseMove={_onMouseMove}
//           onClick={_onMouseClick}
//           src={map}
//           alt="map"
//         />
//         <img
//           height="40px"
//           className="pin"
//           style={{ top: pinCoordinates.y - 41, left: pinCoordinates.x }}
//           src={pin}
//           alt="pin"
//         />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return <Test />;
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

import Map from "./components/Map";
import Pin from "./components/Pin";
import { Coordinates } from "./types/Coordinates";

function Test(): React.ReactElement {
  const [coords, setCoords] = useState<Coordinates[]>([]);

  return (
    <div>
      <div className="map-container">
        <div style={{ position: "relative" }}>
          <Map
            onMapClick={(coordinates: Coordinates) =>
              setCoords([...coords, coordinates])
            }
          />
          {coords.map((coord, index) => (
            <Pin key={index} coordinates={coord} index={index} />
          ))}
        </div>
      </div>
      {coords.map((coord, index) => (
        <React.Fragment>
          {`${index + 1} - ${coord.x} ${coord.y}`}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

function App() {
  return <Test />;
}

export default App;
