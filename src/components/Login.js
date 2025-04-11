import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {auth} from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constants";

const Login = ()=>{
  
  const dispatch = useDispatch();

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null); 

    const Fname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        //Validate the form data
         // checkValidData
        // console.log(email);
         //console.log(password);

       const message = checkValidData(email.current?.value, password.current?.value);
       setErrorMessage(message);

       if(message === null){
        //Sign Up/Sign in
        if(!isSignInForm){
          //SignUp logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
             .then((userCredential) => {
               // Signed up 
               const user = userCredential.user;
               updateProfile(user, {
                displayName: Fname.current.value, 
                //photoURL: "https://example.com/jane-q-user/profile.jpg"
              })
                .then(() => {
                // Profile updated!
                const {uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({
                     uid:uid,
                     email:email, 
                     displayName: displayName
                     })
                    );
                  
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
              });
               //console.log(user);
                 
            })
          .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode + "-" + errorMessage);
              });
        }
        else{
          //SignIn logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
           // Signed in 
            const user = userCredential.user;
           // console.log(user);
    
              })
          .catch((error) => {
           const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            });

        }

       }

    };

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    };
    return (
    <div>
        <Header />
        <div>
        <img
        className="absolute"
         src = {BG_URL} alt="Background"/>
        </div>

        <form 
          onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
           <h1 className="font-bold text-3xl py-4 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>
    
           {!isSignInForm && (<input
             ref={Fname} 
             type="text"
             placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
           />)}

            <input 
            ref={email}
             type="text"
             placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700"
           />

           <input
           ref={password}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700"
           />
           <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
           <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"} </button> 
           <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now":"Already registered? Sign In Now."} </p>
        </form>
    
    </div>
    );
}
export default Login;