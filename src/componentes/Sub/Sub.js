import React from "react";
import styles from './Sub.module.css';

class Sub extends React.Component {
    render(){
        return(
            <div className={styles.Sub}>
                
                {this.props.children}
                
            </div>
        )
    }

}
    export default Sub;