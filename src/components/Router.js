import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignUp from "routes/SignUp";
import Home from "routes/Home";
import LogIn from "routes/LogIn";
import Diary from "routes/Diary";
import ToDoList from "routes/ToDoList";
import Profile from "routes/Profile";

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
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="/to-do-list" element={<ToDoList />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Redirect from="*" to="/" /> */}
      </Routes>
    </Router>
  );
  
}