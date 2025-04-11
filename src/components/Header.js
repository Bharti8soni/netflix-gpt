import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import Login from "./Login";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = ()=>{
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    
    const handleSignOut =()=>{
        signOut(auth).then(() => {
          
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    
    const handleGptSearchClick =() =>{
          dispatch(toggleGptSearchView())
    }
    const handleLanuageChange = (e)=>{
      dispatch(changeLanguage(e.target.value))
        }
  

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //If my user is present that means this is signIn case (if the user signUp for the first time then also this will be called)
              const {uid, email, displayName } = user;
              dispatch(addUser({ uid:uid, email:email, displayName: displayName }));
              navigate("/browse");
            
            } else {
              //This is signOut case
              dispatch(removeUser());
              navigate("/");
                  }
          });

          return () =>unsubscribe()
              },[] )
    return(
        <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
            <img 
            className="w-44 "
            src ={LOGO} alt="logo"/>

         {user && (
          <div className="flex p-2">

          {showGptSearch && <select className="p-2 my-3 text-black rounded-lg" onChange={handleLanuageChange}>
            {SUPPORTED_LANGUAGES.map(lang => (<option key ={lang.identifier}value = {lang.identifier}>{lang.name}</option>)
            )}
          </select>}

          <button onClick={handleGptSearchClick} 
          className="font-bold rounded-lg my-3 mx-2 p-2 bg-purple-700">
           { showGptSearch? "Homepage": "GPT Search"} </button>

          <button onClick={handleSignOut} 
          className="flex p-2 font-bold  rounded-lg bg-red-500 my-3">Sign out</button>
          </div>
        )}
          
        </div>
        
    );
}
export default Header;