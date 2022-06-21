import React from "react";
import { useState } from "react";
import Header from "components/Header";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { authService } from "fbsetting";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onChange = (event) => {
    const {target:{name, value}} = event;

    if (name === "email") {
      setEmail((current) => {
        current = value;
        return current;
      })

    }

    else if (name === "password") {
      setPassword((current) => {
        current = value;
        return current;
      })

    }
  }

  const logInSubmit = (event) => {
    event.preventDefault();


  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onSocialClick = async(event) => {
    let provider;
    try {
      provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authService, provider);
      console.log(result);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
    } catch(error) {
      console.log(error);
    }
  }

  return(
    <>
      <span>LogIn ++</span>
      <Header />

      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
        autoFocus
        id="email"
        name="email"
        type="text"
        required
        value={email}
        onChange={onChange}
        placeholder="Email"/>
        
        <label htmlFor="password">비밀번호</label>
        <input
        id="password"
        name="password"
        type="password"
        required
        value={password}
        onChange={onChange}
        placeholder="password"/>

        <button type="submit" onSubmit={logInSubmit}>Sign In</button>
        <button onClick={onSocialClick}>Sign With Google</button>

        <Link to="/sign-up">
          <button>Sign Up</button>
        </Link>
        
      </form>
    </>
  );
};

export default LogIn;