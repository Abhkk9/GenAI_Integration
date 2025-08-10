import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai
import openai from "../utils/openai";

export default function GptSearchBar() {

  const searchText = useRef(null);
  const languageKey = useSelector((store) => store.config.lang);


  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    
    const userRequest = searchText.current.value;
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      instructions:
        "you are a movie recommendation system deployed on a netflix like multimedia streaming project , you process only movie recommendation requests nothing else, if user asks something else just decline politly and respond to user to stick with movie search recommendation",
      input: userRequest,
    });
    console.log(response.choices);
  };


  return (
    <div className=" pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4  col-span-9"
          type="text"
          placeholder={lang[languageKey].searchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-500 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
}
