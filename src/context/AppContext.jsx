import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// createContext
const AppContext = createContext();

// ProvideContext
export const ProvideContext = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const randomMealUrl  = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const fetchData = async (url) => {
    try {
        const {data} = await axios.get(url)

            setMeals(data.meals)

    } catch (error) {
        console.log(error.response)
    }
  } 

  useEffect(() => {
    fetchData(allMealsUrl)
  }, [])
  



  const value = { fetchData,meals };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// create-customhook and consume-context
export const useCustomAppContext = () => useContext(AppContext);
