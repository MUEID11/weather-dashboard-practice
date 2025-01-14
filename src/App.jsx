import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

import { FavoriteLocationProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      <FavoriteLocationProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
      </FavoriteLocationProvider>
    </WeatherProvider>
  );
}

export default App;
