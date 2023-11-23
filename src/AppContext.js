import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';

const AppContext = createContext({
  weatherApi: {
    temp: "1 degree",
  },
  wardrobe: {}
});

export function AppContextProvider(props) {
  const [weather, setWeather] = useState({ temp: "1 degree" });
  const [wardrobe, setWardrobe] = useState({});
  const [userInput, setUserInput] = useState();

  const handleSetWeather = (weatherApi) => {
    setWeather(weatherApi);
  };
  const handleSetWardrobe = (items) => {
    setWardrobe(items);
  };
  const handleSetUserInput = (data) => {
    setUserInput(data);
  };

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/wardrobe/')
        .then(response => {
            console.log(response);
            handleSetWardrobe(response.data);
        })
        .catch(e => console.log(e));

}, [])

  const contextValues = {
    weatherApi: weather,
    setWeather: handleSetWeather,
    wardrobe: wardrobe,
    setWardrobe: handleSetWardrobe,
    userInput: userInput,
    setUserInput: handleSetUserInput
  };

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
