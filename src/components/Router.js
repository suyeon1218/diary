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
import Write from "routes/Write";
import ReadDiary from "routes/ReadDiary";

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

        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/diary" element={<Diary />}></Route>
        <Route exact path="/to-do-list" element={<ToDoList />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/write" element={<Write />}></Route>
        <Route exact path="/read-diary/:no" element={<ReadDiary />}></Route>
      </Routes>
    </Router>
  );
  
}