import { Outlet, useNavigate } from "react-router-dom";

const Questions = () => {
  const questions = [
    { id: 1, key: "Auto Complete Search", value: "/autoCompleteSearch" },
    {
      id: 2,
      key: "Debounce",
      value: "/debounce",
    },
    {
      id: 3,
      key: "Dependent dropdown",
      value: "/dropdown",
    },
    { id: 4, key: "Image slider", value: "/imageSlider" },
    { id: 5, key: "Pagination", value: "/pagination" },
    { id: 6, key: "Phone number formating", value: "/phoneNumber" },
    { id: 7, key: "Real time search bar", value: "/realTimeFilter" },
    { id: 8, key: "Window resize hook", value: "/useWindowSizeHook" },
    { id: 9, key: "Progressbar", value: "/progressbar" },
    { id: 10, key: "File Explorer", value: "/fileExplorer" },
    { id: 11, key: "File Structure", value: "/fileStructure" },
    { id: 12, key: "Tab Form", value: "/tabForm" },
    { id: 13, key: "Tic tac toe", value: "/ticTacToe" },
    { id: 14, key: "Password genarator", value: "/passwordGenarator" },
    { id: 15, key: "Animated progressbar", value: "/animatedProgressBar" },
    { id: 16, key: "Memmory Game", value: "/memmoryGame" },
    { id: 17, key: "Multi Select", value: "/multiSelect" },
  ];
  const navigate = useNavigate();

  const onSelectQuestion = (e) => {
    if (e.target.value) navigate(e.target.value);
  };

  return (
    <div className="main">
      <div className="questions">
        <h1>Questions</h1>
        <select
          onChange={(e) => onSelectQuestion(e)}
          className="question-select"
        >
          <option value={""}>Select Question</option>
          {questions.map((question) => {
            return (
              <option key={question.id} value={question.value}>
                {question.key}
              </option>
            );
          })}
        </select>
      </div>

      <Outlet />
    </div>
  );
};
export default Questions;
