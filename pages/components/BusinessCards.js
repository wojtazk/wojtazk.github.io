import React from 'react';
import Tile from './Tile';

import styles from './BusinessCards.module.css';

const BusinessCards = (props) => {
  return (
    <div className={styles['business-cards']}>
      {props.links.map((link) => {
        return <Tile {...link} />;
      })}
    </div>
  );
};

export default BusinessCards;
