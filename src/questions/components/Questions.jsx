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
      value: "/interviewQuestionsphoneNumber",
    },
    {
      id: 7,
      key: "Real time search bar",
      value: "/interviewQuestionsrealTimeFilter",
    },
    {
      id: 8,
      key: "Window resize hook",
      value: "/interviewQuestionsuseWindowSizeHook",
    },
    { id: 9, key: "Progressbar", value: "/interviewQuestionsprogressbar" },
    { id: 10, key: "File Explorer", value: "/interviewQuestionsfileExplorer" },
    {
      id: 11,
      key: "File Structure",
      value: "/interviewQuestionsfileStructure",
    },
    { id: 12, key: "Tab Form", value: "/interviewQuestionstabForm" },
    { id: 13, key: "Tic tac toe", value: "/interviewQuestionsticTacToe" },
    {
      id: 14,
      key: "Password genarator",
      value: "/interviewQuestionspasswordGenarator",
    },
    {
      id: 15,
      key: "Animated progressbar",
      value: "/interviewQuestionsanimatedProgressBar",
    },
    { id: 16, key: "Memmory Game", value: "/interviewQuestionsmemmoryGame" },
    { id: 17, key: "Multi Select", value: "/interviewQuestionsmultiSelect" },
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
