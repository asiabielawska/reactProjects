import "./App.scss";
import { useState } from "react";
import { useFetchCatsFacts } from "./hooks/useFetchCatsFacts";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const fetchData = useFetchCatsFacts();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="allContent">
      <h2>
        Type in the input number of the facts that you want to know about cats
        and click the button
      </h2>
      <div>
        <input type="number" value={inputValue} onChange={handleChange}></input>
      </div>
      <button id="displayFacts" onClick={() => fetchData.factsData(inputValue)}>
        Click me!
      </button>
      {fetchData.arrFacts && (
        <ol>
          {fetchData.arrFacts.map((el, index) => (
            <li key={index}> {el}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
