import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
// const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

// createContext
const AppContext = createContext();

// ProvideContext
export const ProvideContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        // eğer aranılan lezzet database de yoksa
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(`${allMealsUrl}${searchTerm}`);

  }, [searchTerm]);

  const value = { meals, loading ,setSearchTerm};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// create-customhook and consume-context
export const useCustomAppContext = () => useContext(AppContext);
