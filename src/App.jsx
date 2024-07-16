import "./App.css";
import ChangeBg from "./components/ChangeBg";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import CounterRed from "./components/CounterRed";
import FetchData from "./components/FetchData";
import HelloWorld from "./components/HelloWorld";
import ImageUploder from "./components/ImageUploder";
import LogIn from "./components/LogIn";
import Pagination from "./components/Pagination";
import PaginationRed from "./components/PaginationRed";
import Quote from "./components/Quote";
import ResponsiveNav from "./components/ResponsiveNav";
import Routing from "./components/Routing";
import Search from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import ShowList from "./components/ShowList";
import Theme from "./components/Theme";
import Theme1 from "./components/Theme1";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import TodoRed from "./components/TodoRed";
import ToggleSwitch from "./components/ToggleSwitch";
import UserInput from "./components/UserInput";
import Weather from "./components/Weather";
import ShoppingCartProvider from "./store/ShoppingCartContext";
import ThemeProvider from "./store/ThemeContext";

function App() {
  // const items = ["item 1", " item 2", "item 3", "item 4", "object 1", "object 2", "new 1", "new 2", "new 3"]
  return (
    <>
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <UserInput /> */}
      {/* <ShowList /> */}
      {/* <ToggleSwitch /> */}
      {/* <FetchData /> */}
      {/* <Timer /> */}
      {/* <TodoList /> */}
      {/* <ChangeBg /> */}
      {/* <Routing /> */}
      {/* <Quote /> */}
      {/* <ImageUploder /> */}
      {/* <LogIn /> */}
      {/* <Weather /> */}
      {/* <Search /> */}
      {/* <Pagination items={items} itemsPerPage={2}/> */}
      {/* <ColorPicker /> */}
      {/* <ResponsiveNav /> */}
      {/* <ThemeProvider>
        <div>
          <Theme />
          <Theme1 />
        </div>
      </ThemeProvider> */}
      {/* <ShoppingCartProvider>
      <ShoppingCart />
      </ShoppingCartProvider> */}
      {/* <CounterRed /> */}
      {/* <TodoRed /> */}
      <PaginationRed />
      
    </>
  );
}

export default App;
