import "./App.css";
import Page from "./Page";

import { FavoriteLocationProvider, LocationProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <LocationProvider>
    <WeatherProvider>
      <FavoriteLocationProvider>
          <Page />
      </FavoriteLocationProvider>
    </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
