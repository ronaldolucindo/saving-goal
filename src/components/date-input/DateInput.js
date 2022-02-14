import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.module.scss';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';

function DateInput(props) {
  return (
    <div className={styles['date-input']}>
      <label>{props.label}</label>
      <div className={styles['input-box']}>
        <button
          type="button"
          disabled={props.isPrevMonthDisabled}
          onClick={props.onPrevMonth}
        >
          <ArrowLeft />
        </button>
        <div className={styles['value-container']}>
          <p className={styles.month}>{props.monthValue}</p>
          <p className={styles.year}>{props.yearValue}</p>
        </div>
        <button
          type="button"
          disabled={props.isNextMonthDisabled}
          onClick={props.onNextMonth}
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
