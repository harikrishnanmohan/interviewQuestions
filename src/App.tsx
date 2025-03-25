import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Questions from "./questions/components/Questions";
import ImageSlider from "./questions/components/ImageSlider";
import Dropdown from "./questions/components/Dropdown";
import RealTimeFilter from "./questions/components/RealTimeFilter";
import Debounce from "./questions/components/Debounce";
import PhoneNumber from "./questions/components/PhoneNumber";
import WindowSize from "./questions/components/useWindowSizeHook";
import Pagination from "./questions/components/Pagination";
import AutoCompleteSearch from "./questions/components/AutoCompleteSearch";
import Progresssbar from "./questions/components/Progressbar";
import FileExplorer from "./questions/components/FileExplorer";
import FileStructure from "./questions/components/FileStructure";
import TabForm from "./TabForm/TabForm";
import TicTacToe from "./questions/components/TicTacToe";
import PasswordGenerator from "./questions/components/PasswordGenerator";
import AnimatedProgressBar from "./questions/components/AnimatedProgressBar";
import MemmoryGame from "./questions/components/MemmoryGame";
import MultiSelect from "./questions/components/MultiSelect";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Questions />,
      children: [
        {
          path: "/autoCompleteSearch",
          element: <AutoCompleteSearch />,
        },
        {
          path: "/debounce",
          element: <Debounce />,
        },
        {
          path: "/dropdown",
          element: <Dropdown />,
        },
        {
          path: "/imageSlider",
          element: <ImageSlider />,
        },
        {
          path: "/pagination",
          element: <Pagination />,
        },
        {
          path: "/phoneNumber",
          element: <PhoneNumber />,
        },
        {
          path: "/realTimeFilter",
          element: <RealTimeFilter />,
        },
        {
          path: "/useWindowSizeHook",
          element: <WindowSize />,
        },
        {
          path: "/progressbar",
          element: <Progresssbar />,
        },
        {
          path: "/fileStructure",
          element: <FileStructure />,
        },
        {
          path: "/fileExplorer",
          element: <FileExplorer />,
        },
        {
          path: "/tabForm",
          element: <TabForm />,
        },
        {
          path: "/ticTacToe",
          element: <TicTacToe />,
        },
        {
          path: "/passwordGenarator",
          element: <PasswordGenerator />,
        },
        {
          path: "/animatedProgressBar",
          element: <AnimatedProgressBar />,
        },
        {
          path: "/memmoryGame",
          element: <MemmoryGame />,
        },
        {
          path: "/multiSelect",
          element: <MultiSelect />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
