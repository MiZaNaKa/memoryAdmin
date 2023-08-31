import React, {  useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";

import Story from "./component/Story";
import LoginByGoogle from "./loginByGoogle";
import SuccessfullyLogin from "./component/SuccessfullyLogin";
import PostStory from "./component/PostStory";
import MyStoryList from "./component/MyStoryList";

import Login from "./component/Login";

import StoryDetail from "./component/StoryDetail";
import Myo from "./Myo";
import { createBrowserHistory } from 'history';
import loginHelper from './jwtHelper/jwtHelper'

import withNavigateHook from './common/Navigate'

const history = createBrowserHistory();
const App = () => {
  // const navigate = useNavigate();
  const[userInfo,setUserInfo]=useState('')
  useEffect(() => {
    const getUserInfo = async () => {
      const data = await loginHelper.UserInfo()
      if(data){
        // navigate('/Login')
        setUserInfo(data)
      }
      else{
        // navigate('/')
      }
    }
  
    getUserInfo()
    .catch(console.error);
  }, [])





  return (
    <Router>
      <Routes history={history}>
        <Route  path="/" element={<MyStoryList />}/>
        <Route path="/Story" element={<Story />} />
        <Route path="/Myo" element={<Myo />} />
        <Route path="/LoginByGoogle" element={<LoginByGoogle />} />
        <Route path="/SuccessfullyLogin/:id" element={<SuccessfullyLogin />} />
        <Route path="/PostStory" element={<PostStory />} />
        <Route path="/PostStory/:id" element={<PostStory />} />
        <Route path="/StoryAll" element={<MyStoryList />} />
        <Route path="/StoryDetail/:id" element={<StoryDetail />} />
        <Route path="/Login" element={<Login />} />
        
        
      </Routes>
    </Router>
  );
};

export default App