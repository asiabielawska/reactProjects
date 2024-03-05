import axios from "axios";
import { useState } from "react";

export const useFetchCatsFacts = () => {
  const [arrFacts, setArrFacts] = useState<string[]>();

  const factsData = async (inputValue: string) => {
    try {
      const response = await axios.get(
        `https://meowfacts.herokuapp.com?count=${inputValue}`
      );
      setArrFacts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    arrFacts,
    factsData,
  };
};
