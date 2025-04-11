import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
    return (    
      <div> 
            <div className="-">
              <img
                className="absolute -z-20"
                src ={BG_URL} alt="Background"/>
            </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    );
}
export default GptSearch;