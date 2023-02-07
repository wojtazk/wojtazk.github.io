import React from 'react';

import styles from './Tile.module.css';

const Tile = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div className={styles.card}>
        <img src={props.icon} alt={props.name + ' icon'} />

        <div>
          <h3>{props.name}</h3>
          <p>{props.url}</p>
        </div>
      </div>
    </a>
  );
};

export default Tile;
