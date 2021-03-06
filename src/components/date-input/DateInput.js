import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.module.scss';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';

function DateInput(props) {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight')
      return !props.isNextMonthDisabled && props.onNextMonth();
    else if (e.key === 'ArrowLeft')
      return !props.isPrevMonthDisabled && props.onPrevMonth();
  };

  return (
    <div className={styles['date-input']}>
      <label>{props.label}</label>
      <div
        tabIndex="0"
        onKeyDown={handleKeyDown}
        className={styles['input-box']}
        data-testid={'DateInput.inputBox'}
      >
        <button
          type="button"
          disabled={props.isPrevMonthDisabled}
          onClick={props.onPrevMonth}
          data-testid="DateInput.prevMonthButton"
        >
          <ArrowLeft />
        </button>
        <div className={styles['value-container']}>
          <p className={styles.month} data-testid="DateInput.monthValue">
            {props.monthValue}
          </p>
          <p className={styles.year} data-testid="DateInput.yearValue">
            {props.yearValue}
          </p>
        </div>
        <button
          type="button"
          disabled={props.isNextMonthDisabled}
          onClick={props.onNextMonth}
          data-testid="DateInput.nextMonthButton"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

DateInput.defaultProps = {
  isPrevMonthDisabled: false,
  isNextMonthDisabled: false,
};

DateInput.propTypes = {
  label: PropTypes.string,
  monthValue: PropTypes.string,
  yearValue: PropTypes.number,
  onNextMonth: PropTypes.func,
  onPrevMonth: PropTypes.func,
  isPrevMonthDisabled: PropTypes.bool,
  isNextMonthDisabled: PropTypes.bool,
};

export default DateInput;
