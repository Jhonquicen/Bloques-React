import React from "react";
import styles from './Main.module.css';

class Main extends React.Component {
    render(){

        return(
            <div className={styles.Main}>
                
                    {this.props.children}
                
            </div>
        )
    }

}
    export default Main;