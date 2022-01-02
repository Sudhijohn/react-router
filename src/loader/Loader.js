import React from 'react';
import styles from './loader.module.css';
import loader from './loader.svg';

const Loader = (props) => {
  return (
    <div className={styles.container}>
      <img src={loader} alt="Loading...." />
    </div>
  );
};

export default Loader;
