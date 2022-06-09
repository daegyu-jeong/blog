import "./App.css";
import React, { useState } from "react";
import IsLogin from "./navi/IsLogin";
import NotLogin from "./navi/NotLogin";
import Signup from "./login/Signup";
import Login from "./login/Login";
import BlogList from "./blog/BlogList";
import Detail from "./blog/Detail"
import AddBlog from "./blog/AddBlog";

import { Route, Routes } from "react-router-dom";
//bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {

  const cardlist = [{writer:"aaa", text:"abc"}, {writer:"bbb", text:"def"}, {writer:"ccc", text:"ghi"}]
  const [card, setcard] = useState(cardlist)
  
  return (
    <>
      <div>
        <NotLogin />
      </div>

      <Routes>
        <Route exact path="/" element={<BlogList card={card} />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Detail/:index" element={<Detail />} />
        <Route exact path="/AddBlog" element={<AddBlog card={card} setcard={setcard}/>} />
      </Routes>
    </>
  );
}

export default App;
