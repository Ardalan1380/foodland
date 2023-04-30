import React from 'react';
import { MoonLoader } from 'react-loader-spinner';
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={styles.container}> 
        <MoonLoader
        color="#b9d000"
        cssOverride={{}}
        loading
        size={100}
        />
        </div>
    );
};

export default Loader;