import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const { children, ...buttonProps } = props;
  return (
    <button className={styles.button} {...buttonProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Button;
