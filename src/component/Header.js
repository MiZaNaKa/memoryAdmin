
import { Link } from "react-router-dom";
import React, {  useEffect,useState} from 'react';
import Logo from "../img/podcast.png"

import loginHelper from '../jwtHelper/jwtHelper'
import Me from "../img/me.png"

import '../commonStyle/commonStyle.css'
function Home(){
    const[userInfo,setUserInfo]=useState('')
    useEffect(() => {
        const getUserInfo = async () => {
          const data = await loginHelper.UserInfo()
       
          if(data){
            setUserInfo(data)
          }
        }
        getUserInfo()
          .catch(console.error);
    }, [])

    
    const logOut=async()=>{
        const data = await loginHelper.deleteJWT()
        window.location.reload();
    }



    return <div className="header">
        <div className="headerBox clearfix">
            <div className="logo">
                <Link className="link" to="/">
                    <img src={Logo} className="logoIcon"/>
                </Link>
            </div>
    
            <div className="headercontent">
                
            </div>

            <div className="userInfo">
                {userInfo ?
                    <ul>
                        <li id="visible">
                            <img src={Me} className="logoIcon"/>
                            <ul id="hidden">
                           
                            <li><p onClick={logOut} className="logout">Log Out</p></li>
                            
                            </ul>
                        </li>
                    </ul>
                    :
                    <img src={Me} className="logoIcon"/>
                }

            </div>

        </div>

        
    </div>
}
export default Home