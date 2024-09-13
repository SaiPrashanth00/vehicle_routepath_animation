import React from 'react';
import MapComponent from './components/MapComponent';

const path = [
  [51.505, -0.09],
  [51.515, -0.1],
  [51.525, -0.12],
  [51.535, -0.13]
];

const App = () => {
  return (
    <div>
      <MapComponent path={path} />
    </div>
  );
};

export default App;
