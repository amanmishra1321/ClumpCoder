import React from "react";
import { GoogleLogout } from 'react-google-login';

const Logout = ()=> {
    const logout = (res) => (
        console.log(res)
    )
        
    return(<>
        <GoogleLogout htmlFor="logout-button" style={{opacity:"none"}}
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
    </>);
}
export default Logout;