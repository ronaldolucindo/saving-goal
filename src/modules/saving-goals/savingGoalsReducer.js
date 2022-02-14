import makeReducer from 'common/make-reducer';
import DateUtils from 'common/date';

const MAX_AMOUNT_VALUE = 100_000_000_000;

const INITIAL_STATE = {
  amount: '0.00',
  reachDate: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  monthlyAmount: 0,
  totalMonth: 0,
  canShowSummary: false,
};

export const SAVING_GOALS_ACTIONS = {
  USER_TYPES_AMOUNT: 'USER_TYPES_AMOUNT',
  USER_SETS_NEXT_MOUNTH: 'USER_SETS_NEXT_MOUNTH',
  USER_SETS_PREV_MOUNTH: 'USER_SETS_PREV_MOUNTH',
  APP_PROCESS_GOAL: 'APP_PROCESS_GOAL',
  USER_SUBMITS_FORM: 'USER_SUBMITS_FORM',
};

const SAVING_GOALS_REDUCER_CONFIG = {
  [SAVING_GOALS_ACTIONS.USER_TYPES_AMOUNT]: (state, action) => {
    const cleanAmount = (action.payload || '0')
      ?.replace('.', '')
      ?.replace(',', '')
      ?.replace(/\D/g, '');
    const validValue =
      Number(cleanAmount) < MAX_AMOUNT_VALUE ? cleanAmount : MAX_AMOUNT_VALUE;

    return {
      ...state,
      amount: new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
      }).format(parseFloat(validValue) / 100),
    };
  },
  [SAVING_GOALS_ACTIONS.USER_SETS_NEXT_MOUNTH]: (state) => {
    const nextMonth = state.reachDate.month + 1;
    const year = state.reachDate.year;
    const isCurrentYear = nextMonth < 12;

    return {
      ...state,
      reachDate: {
        month: nextMonth % 12,
        year: isCurrentYear ? year : year + 1,
      },
    };
  },
  [SAVING_GOALS_ACTIONS.USER_SETS_PREV_MOUNTH]: (state) => {
    const prevMonth = state.reachDate.month - 1;
    const year = state.reachDate.year;
    const isCurrentYear = prevMonth > 0;

    return {
      ...state,
      reachDate: {
        month: prevMonth > 0 ? prevMonth : 11,
        year: isCurrentYear ? year : year - 1,
      },
    };
  },
  [SAVING_GOALS_ACTIONS.APP_PROCESS_GOAL]: (state) => {
    const canProcess = Number.parseFloat(state.amount?.replaceAll(',', '')) > 0;
    if (!canProcess) return { ...state, canShowSummary: false };

    const today = new Date();
    const goalDate = new Date(state.reachDate.year, state.reachDate.month);
    const numberOfMonths = DateUtils.getMonthDifference(today, goalDate) || 1;

    const resultAmount = (
      Number.parseFloat(state.amount?.replaceAll(',', '')) / numberOfMonths
    ).toFixed(2);

    return {
      ...state,
      canShowSummary: true,
      totalMonth: numberOfMonths,
      monthlyAmount: new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
      }).format(resultAmount),
    };
  },
  [SAVING_GOALS_ACTIONS.USER_SUBMITS_FORM]: (state) => {
    return {
      ...state,
    };
  },
};

export const { reducer, initialState } = makeReducer(
  SAVING_GOALS_REDUCER_CONFIG,
  INITIAL_STATE
);
