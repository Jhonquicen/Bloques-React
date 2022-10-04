import React from "react";
import styles from './Conte.module.css';

class Conte extends React.Component {
    render(){
        return(
            <div className={styles.Conte}>
                
                    {this.props.children}
                
            </div>
        )
    }

}
    export default Conte;