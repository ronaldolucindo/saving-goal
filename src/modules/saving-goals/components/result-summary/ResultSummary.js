import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultSummary.module.scss';

function ResultSummary(props) {
  return (
    <div className={styles['result-summary']}>
      <div className={styles['monthly-amount']}>
        <p className={styles.label}>Monthly amount</p>
        <p className={styles.value}>${props.monthlyAmount}</p>
      </div>
      <div className={styles['description-container']}>
        <p>
          You’re planning <strong>{props.totalMonths} monthly deposits</strong>{' '}
          to reach your <strong>${props.totalValue}</strong> goal by{' '}
          <strong>
            {props.monthDeadline} {props.yearDeadline}
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

ResultSummary.propTypes = {
  monthDeadline: PropTypes.string,
  yearDeadline: PropTypes.number,
  monthlyAmount: PropTypes.number,
  totalMonths: PropTypes.number,
  totalValue: PropTypes.number,
};

export default ResultSummary;
