import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    //fetch trailer video
    const dispatch = useDispatch();

    const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
       // console.log(json);

       const filterData = json.results.filter((video) => video.type === "Trailer");
        //console.log(filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];
       // console.log(trailer)
        
        dispatch( addTrailerVideo(trailer))
    } ;
    useEffect(() => {
        getMovieVideos()
    },[])
}
export default useMovieTrailer;