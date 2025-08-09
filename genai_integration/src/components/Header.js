import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPOSTED_LANGUAGES, USER_ICON } from "../utils/constants.js";
import { toggleGptSearchview } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  // unsubscribe in useEffect?

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    // console.log("sign out clicked")
    signOut(auth)
      .then(() => {
        // console.log("it should sign out")
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchview());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  
  return (
    <div className="w-screen absolute z-20 flex justify-between items-center">
      <img
        className="w-44 px-8 py-2 bg-gradient-to-b from-black "
        src={LOGO}
        alt="Logo"
      />
      <div className="flex items-center gap-4">
        {showGptSearch && (
          <select
            className="p-2 m-2 bg-gray-500 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPOSTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        {user && (
          <button
            className="w-20 bg-red-300 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "HomePage"}
          </button>
        )}
        {user && (
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 p-2" alt="userIcon" src={USER_ICON} />
            <button
              className="w-32 bg-red-300 rounded-xl"
              onClick={handleSignOut}
            >
              Hi, {user.displayName} Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
