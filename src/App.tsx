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
// import JsQuestions from "./questions/components/JsQuestions";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/interviewQuestions",
      element: <Questions />,
      children: [
        {
          path: "/interviewQuestions/autoCompleteSearch",
          element: <AutoCompleteSearch />,
        },
        {
          path: "/interviewQuestions/debounce",
          element: <Debounce />,
        },
        {
          path: "/interviewQuestions/dropdown",
          element: <Dropdown />,
        },
        {
          path: "/interviewQuestions/imageSlider",
          element: <ImageSlider />,
        },
        {
          path: "/interviewQuestions/pagination",
          element: <Pagination />,
        },
        {
          path: "/interviewQuestions/phoneNumber",
          element: <PhoneNumber />,
        },
        {
          path: "/interviewQuestions/realTimeFilter",
          element: <RealTimeFilter />,
        },
        {
          path: "/interviewQuestions/useWindowSizeHook",
          element: <WindowSize />,
        },
        {
          path: "/interviewQuestions/progressbar",
          element: <Progresssbar />,
        },
        {
          path: "/interviewQuestions/fileStructure",
          element: <FileStructure />,
        },
        {
          path: "/interviewQuestions/fileExplorer",
          element: <FileExplorer />,
        },
        {
          path: "/interviewQuestions/tabForm",
          element: <TabForm />,
        },
        {
          path: "/interviewQuestions/ticTacToe",
          element: <TicTacToe />,
        },
        {
          path: "/interviewQuestions/passwordGenarator",
          element: <PasswordGenerator />,
        },
        {
          path: "/interviewQuestions/animatedProgressBar",
          element: <AnimatedProgressBar />,
        },
        {
          path: "/interviewQuestions/memmoryGame",
          element: <MemmoryGame />,
        },
        {
          path: "/interviewQuestions/multiSelect",
          element: <MultiSelect />,
        },
        // {
        //   path: "/interviewQuestions/jsQuestions",
        //   element: <JsQuestions />,
        // },
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
