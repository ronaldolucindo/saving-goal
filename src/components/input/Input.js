import React from 'react';
import PropTypes from 'prop-types';

import inputStyles from './Input.module.scss';

function Input(props) {
  const { label, prepend, ...inputProps } = props;
  return (
    <div className={inputStyles.input}>
      <label htmlFor={inputProps.name}>{label}</label>
      <div className={inputStyles['input-box']}>
        {!!prepend && (
          <span
            className={inputStyles['input-prepend']}
            data-testid="Input.prepend"
          >
            {prepend}
          </span>
        )}
        <input {...inputProps} />
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  prepend: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
