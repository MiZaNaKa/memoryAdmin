
import React, {  useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import SuccessfullyLogin from "./component/SuccessfullyLogin";
import CreateStory from "./component/CreateStory";
import Login from "./component/Login";
import StoryAll from "./component/MyStoryList";
import StoryDetail from "./component/StoryDetail";

import loginHelper from './jwtHelper/jwtHelper'
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      const data = await loginHelper.UserInfo()
      if(data){
        navigate('/')
      }
      else{
        navigate('/Login')
      }
    }
  
    getUserInfo()
    .catch(console.error);
  }, [])
  return (
      <div>
        
        <Routes>
          <Route  path="/" element={<StoryAll />}/>
          <Route  path="/CreateStory" element={<CreateStory />}/>
          <Route  path="/Login" element={<Login />}/>
          <Route path="/StoryDetail/:id" element={<StoryDetail />} />
          
        </Routes>
      </div>
  );
}

export default App