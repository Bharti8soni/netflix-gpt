import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return(
            <div className="w-40 h-52 pr-4 ">
              <img alt ="Movie Card" src = { IMG_CDN_URL + posterPath}/>
           </div>
       
    );
}
export default MovieCard;