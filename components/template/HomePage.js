import React from 'react';
import styles from "./HomePage.module.css"
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import Instruction from '../modules/Instruction';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Instruction />
        </div>
    );
};

export default HomePage;