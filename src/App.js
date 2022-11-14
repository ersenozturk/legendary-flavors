import "./App.css";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modals from "./components/Modals";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Search />
      <Favorites />
      <Meals />
      <Modals />
    </>
  );
}

export default App;
