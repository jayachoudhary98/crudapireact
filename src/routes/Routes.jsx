import { Edit } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import AddUser from "../components/AddUser";
import Home  from "../components/Home";
import { Login } from "../components/Login";
import Service from "../components/Service";
import UserDetails from "../components/UserDetails";
import UserLists from "../components/UserLists";
import View from "../components/View";

export const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/user_details" element={<UserDetails />} />
      <Route path="/add_user" element={<AddUser />} />
      <Route path="/userlist" element={<UserLists />} />
      <Route path="/view/:id" element={<View/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>

    </Routes>
  );
};
