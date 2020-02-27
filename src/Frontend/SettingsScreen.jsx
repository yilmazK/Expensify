import './SettingsScreenstyles.css'
import React, {useContext} from "react";
import NavBar from "./NavBar";

class SettingsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="main-background-settings">
                <NavBar/>
                <div className="settings-section"></div>
            </div>
        )
    }
}

export default SettingsScreen