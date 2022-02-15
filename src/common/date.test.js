import DateUtils from './date';

test('returns empty string for invalid month index', () => {
  const negativeMonthIndex = DateUtils.getMonthName(-1);
  const outOfRangeIndex = DateUtils.getMonthName(20);
  expect(negativeMonthIndex).toBe('');
  expect(outOfRangeIndex).toBe('');
});

test('returns right month name', () => {
  const december = DateUtils.getMonthName(11);
  const october = DateUtils.getMonthName(9);
  expect(december).toBe('December');
  expect(october).toBe('October');
});

test('returns ritgh number of months', () => {
  const oneYear = DateUtils.getMonthDifference(
    new Date(2021, 1),
    new Date(2022, 1)
  );
  const thirtyFiveYears = DateUtils.getMonthDifference(
    new Date(2021, 1),
    new Date(2056, 1)
  );
  const negativeMonths = DateUtils.getMonthDifference(
    new Date(2022, 1),
    new Date(2021, 1)
  );

  expect(oneYear).toBe(12);
  expect(thirtyFiveYears).toBe(420);
  expect(negativeMonths).toBe(-12);
});
