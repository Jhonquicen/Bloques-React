import React from "react";
import styles from './NaviMain.module.css';

class NaviMain extends React.Component {
    render(){

        return(
            <div className={styles.NaviMain}>
                
                {this.props.children}
                
            </div>
        )
    }

}
    export default NaviMain;