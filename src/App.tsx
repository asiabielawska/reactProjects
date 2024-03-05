import axios from "axios";
import "./App.scss";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [arrFacts, setArrFacts] = useState<string[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const factsData = async () => {
    try {
      const response = await axios.get(
        `https://meowfacts.herokuapp.com/?count=${inputValue}`
      );
      setArrFacts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>
        Type in the input number of the facts that you want to know about cats
        and click the button
      </h2>
      <div>
        <input value={inputValue} onChange={handleChange}></input>
      </div>
      <button id="displayFacts" onClick={factsData}>
        Click me!
      </button>
      {arrFacts && (
        <ol>
          {arrFacts.map((el, index) => (
            <li key={index}> {el}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export default App;
