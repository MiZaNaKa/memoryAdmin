
import { Link } from "react-router-dom";
import React, {  useEffect,useState} from 'react';
import Logo from "../img/podcast.png"

import loginHelper from '../jwtHelper/jwtHelper'
import Me from "../img/me.png"

import Drawer from 'react-modern-drawer'
import Close from "../img/close.png"
import 'react-modern-drawer/dist/index.css'

import '../commonStyle/commonStyle.css'
function Home(){
    const[userInfo,setUserInfo]=useState('')
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
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
                <img onClick={toggleDrawer} src={Me} className="logoIcon"/>

            </div>

        </div>

        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            className='bla bla bla'
        >
            <div style={{marginTop:40}}>
                <img onClick={toggleDrawer}  src={Close} className="menuClose"/>
                {/* <div style={{marginBottom:25,textAlign:'center'}}>
                    <Link  className="link" to="/MyStoryList">
                        My Story
                    </Link>
                </div>

                <div style={{marginBottom:25,textAlign:'center'}}>
                    <Link className="link" to="/PostStory">
                        Post Story
                    </Link>
                </div> */}

                <div style={{marginBottom:25,textAlign:'center'}}>
                    <p onClick={logOut} className="logout">Log Out</p>
                </div>
                
            </div>
        </Drawer>

        
    </div>
}
export default Home