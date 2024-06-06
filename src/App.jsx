import { useState } from "react";
import Header from "./Component/Header";
import Investment from "./Component/Investment";
import Result from "./Component/Result";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 1000,
    annualInvestment: 5000,
    expectedReturn: 10,
    duration: 12,
  });

  function handleChange(userIndentifier, newValue) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [userIndentifier]: + newValue,
      };
    });
  }
  const inputIsValid = userData.duration >= 1;
  return (
    <>
      <Header />
      <Investment userInput={userData} onChanges={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero</p>
      )}
      {inputIsValid && <Result input={userData} />}
    </>
  );
}

export default App;
