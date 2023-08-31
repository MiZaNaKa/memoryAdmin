import React, {  useEffect,useState} from 'react';
import Header from "./Header"
import loginHelper from '../jwtHelper/jwtHelper'
import Action from '../action/LoginAction'
import Store from '../store/LoginStore'
import withNavigateHook from '../common/Navigate'
import { useNavigate } from "react-router-dom";
import '../commonStyle/commonStyle.css'


function Login(){
    const navigate = useNavigate();
    const[userInfo,setUserInfo]=useState({"email":"","password":''})
    const[tempoData,setTempoData]=useState(Store.getTempoData())
    
    useEffect(() => {
      Store.addListener(onStoreChange)
    }, []);

    const onStoreChange = () => {
        var tempoData=Store.getTempoData()
        if(tempoData.go){
            navigate('/') 
        }
        // var detail=Store.getDetail()
        // setUserInfo(detail)
        // if(login){
        //   navigate('/')
        // }
    }


    const emailOnChange=(value)=>{
        setUserInfo(prevState => ({
            ...prevState,
            email: value.target.value
        }));
    }

    const passwordOnChange=(value)=>{
      setUserInfo(prevState => ({
        ...prevState,
        password: value.target.value
      }));
      
    }

    const submit=()=>{
      
      if(userInfo.email && userInfo.password){
        Action.adminLogin(userInfo)
      }
    }


    return <div>
        <Header/>
        <div className="form">
            <input onChange={emailOnChange} className="inputBox" type="text" value={userInfo.email}/><br/>
            <br/>
            <br/>
            <input onChange={passwordOnChange} className="inputBox" type="password" value={userInfo.password}/><br/>
            <br/>
            <br/>
            <button onClick={submit}>Login</button>
            
        </div>
    </div>
}
export default Login;