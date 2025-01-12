/* eslint-disable react/prop-types */
import { WeatherContext } from "../context";
import { useWeather } from "../Hooks";


const WeatherProvider = ({children}) => {
  const {weatherData, error, loading} = useWeather();
  return (
    <WeatherContext.Provider value={{weatherData, error, loading}}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;