import { Fab } from "@material-ui/core";
import React from "react";
import "../css/homepage.css";
import Logout from "./logout";
import Sidebar1 from "./sidebar1"; 
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Homepage = ()=> {
    console.log("Homepage");
    return(<>

        <Sidebar1/>
        <div className="position-relative">

        <div
          className="position-fixed"
          style={{ top: "20px", right: "50px" }}
        >
          <Fab
            size="medium"
            className="bg-dark text-light"
            aria-label="add"
            id="logout-button"
          >
            < PersonOutlineOutlinedIcon  />
          </Fab>
        </div>
        <Logout />
        <div
          className="position-fixed"
          style={{ bottom: "20px", right: "50px" }}
        >
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            ? Help
          </Fab>
        </div>
      </div>
    </>);
}
export default Homepage;