import React from "react";
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import "../css/login.css";


function Login() {
    let history = useHistory();
  const onSuccess = (response) =>{
    console.log("Successfully Logged-in");  
    // <Redirect to="/homepage"/>
    history.push("/homepage");
  }
  const onFailure = () =>{
      alert("Login Failed");
  }
  return (
    
    <div className="text-center mt-5">
        <div>Hey There</div>
            <GoogleLogin
            clientId="166325167052-dapsjohs157504u8eu9icd84eul9o94e.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
        
    </div>
  );
}
export default Login;