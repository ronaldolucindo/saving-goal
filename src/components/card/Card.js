import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Card;
