import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignUp from "routes/SignUp";
import Home from "routes/Home";
import LogIn from "routes/LogIn";

export default ({isLoggedIn}) => {

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}>
            </Route>
          </>
        ) :
        (
          <>
            <Route exact path="/" element={<LogIn />}>
            </Route>
          </>)
        }

        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
  
}