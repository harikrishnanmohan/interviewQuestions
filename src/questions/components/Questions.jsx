import { Outlet, useNavigate } from "react-router-dom";

const Questions = () => {
  const questions = [
    {
      id: 1,
      key: "Auto Complete Search",
      value: "/interviewQuestions/autoCompleteSearch",
    },
    {
      id: 2,
      key: "Debounce",
      value: "/interviewQuestions/debounce",
    },
    {
      id: 3,
      key: "Dependent dropdown",
      value: "/interviewQuestions/dropdown",
    },
    { id: 4, key: "Image slider", value: "/interviewQuestions/imageSlider" },
    { id: 5, key: "Pagination", value: "/interviewQuestions/pagination" },
    {
      id: 6,
      key: "Phone number formating",
      value: "/interviewQuestions/phoneNumber",
    },
    {
      id: 7,
      key: "Real time search bar",
      value: "/interviewQuestions/realTimeFilter",
    },
    {
      id: 8,
      key: "Window resize hook",
      value: "/interviewQuestions/useWindowSizeHook",
    },
    { id: 9, key: "Progressbar", value: "/interviewQuestions/progressbar" },
    { id: 10, key: "File Explorer", value: "/interviewQuestions/fileExplorer" },
    {
      id: 11,
      key: "File Structure",
      value: "/interviewQuestions/fileStructure",
    },
    { id: 12, key: "Tab Form", value: "/interviewQuestions/tabForm" },
    { id: 13, key: "Tic tac toe", value: "/interviewQuestions/ticTacToe" },
    {
      id: 14,
      key: "Password genarator",
      value: "/interviewQuestions/passwordGenarator",
    },
    {
      id: 15,
      key: "Animated progressbar",
      value: "/interviewQuestions/animatedProgressBar",
    },
    { id: 16, key: "Memmory Game", value: "/interviewQuestions/memmoryGame" },
    { id: 17, key: "Multi Select", value: "/interviewQuestions/multiSelect" },
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
