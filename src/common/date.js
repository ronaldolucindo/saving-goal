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

function getMonthName(month) {
  return MONTHS_NAMES[month] || '';
}

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
