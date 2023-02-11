import React from 'react';
import Card from './Card';

import styles from './BusinessCards.module.css';

const BusinessCards = (props) => {
  return (
    <div className={styles['business-cards']}>
      {props.links.map((link) => {
        return <Card {...link} key={link.site} />;
      })}
    </div>
  );
};

export default BusinessCards;
