import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActibeTab] = useState(0);
  const [errorState, setErrorState] = useState();
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theam: "dark",
  });

  const tabData = [
    {
      name: "Profile",
      component: Profile,
      validation: () => {
        const err = {};
        if (!data.name || data.name.length < 3) err.name = "Name is not valid";
        if (!data.age || data.age < 18) err.age = "Age is not valid";
        if (!data.email || !data.email.includes("@"))
          err.email = "email is not valid";
        setErrorState(err);
        console.log(err);
        if (err.name || err.age || err.email) return false;
        else return true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validation: () => {
        if (data.interests.length < 1) {
          setErrorState({ interests: "select atleast one interest" });
          return false;
        }
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validation: () => true,
    },
  ];
  const CurrentTab = tabData[activeTab].component;

  const onClickTab = (id) => {
    if (tabData[activeTab].validation()) setActibeTab(id);
  };
  return (
    <div>
      <div className="tab-header">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active-tab" : ""}`}
            onClick={() => onClickTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <CurrentTab data={data} setData={setData} error={errorState} />
      </div>
    </div>
  );
};
export default TabForm;
