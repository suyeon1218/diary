import React from "react";
import { useState, useEffect } from "react";
import Router from "components/Router";
import { authService } from "fbsetting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(authService.currentUser);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);

      if(user) {
        setIsLoggedIn((current) => {
          current = true;
          return current;
        })
      }
      
      else {
        setIsLoggedIn((current) => {
          current = false;
          return current;
        })
      }

      setInit((current) => {
        current = true;
        return current;
      })
    });
  }, []);

  return (
    <>
    {init ? (<Router isLoggedIn={isLoggedIn}/>): (
      <>
        <span>Initializing...</span>
      </>
    )}
      
    </>
  );
}

export default App;
