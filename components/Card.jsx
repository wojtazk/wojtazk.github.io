import React from 'react';

import styles from './Card.module.css';

const Tile = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div className={styles.card}>
        <img src={props.icon} alt={props.site + ' icon'} />

        <div>
          <h3>{props.site}</h3>
          <p>{props.username}</p>
        </div>
      </div>
    </a>
  );
};

export default Tile;
