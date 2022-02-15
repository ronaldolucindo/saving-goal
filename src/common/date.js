const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Get month name given index
 * @param {number} month month index
 * @returns {string} month name
 */
function getMonthName(month) {
  return MONTHS_NAMES[month] || '';
}

/**
 * Get number of months between two dates
 * @param {Date} dateFrom initial date
 * @param {Date} dateTo final date
 * @returns {number} month name
 */
function getMonthDifference(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

const DateUtils = {
  getMonthName,
  getMonthDifference,
};

export default DateUtils;
