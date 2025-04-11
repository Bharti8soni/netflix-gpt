import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
const GptSearchBar = () =>{

    const selectedLanguage = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async()=>{
        console.log(searchText.current.value)
        //make an API call to GPT API and get movie Results

        const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query" +  searchText.current.value + "only give nams of 5 movies, comma seperated";

        /*const gptResults = await openai.chat.gptResults.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: gptQuery },
            ],
          });
          console.log(gptResults.choices)*/

          /*const gptResults = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: gptQuery },
               ],
             }); */

             const response = await openai.responses.create({
                model: 'gpt-4o',
                instructions: gptQuery,
                input: 'Are semicolons optional in JavaScript?',
              });
             console.log(response.choices)
     }
    return(
        <div className="pt-[10%] flex justify-center">
            <form 
               className="w-1/2 bg-black grid grid-cols-12 gap-2"
               onSubmit={(e) => e.preventDefault()}>
                <input 
                ref={searchText}
                 type="text"
                 className="p-4 m-4 col-span-9 " 
                 placeholder={lang[selectedLanguage].gptSearchPlaceholder}/>
                <button
                 className="py-3 px-12 m-4 p-4 bg-red-700 text-white rounded-lg col-span-3 "
                 onClick={handleGptSearchClick} >{lang[selectedLanguage].search}</button>
            </form>
        </div>
    )

}
export default GptSearchBar;