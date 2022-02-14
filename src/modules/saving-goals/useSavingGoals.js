import { useEffect, useReducer } from 'react';
import DateUtils from 'common/date';
import {
  reducer,
  initialState,
  SAVING_GOALS_ACTIONS,
} from './savingGoalsReducer';

function useSavingGoals(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userTypesAmount = (e) =>
    dispatch({
      type: SAVING_GOALS_ACTIONS.USER_TYPES_AMOUNT,
      payload: e.target.value,
    });

  const userSetsNextMonth = () =>
    dispatch({
      type: SAVING_GOALS_ACTIONS.USER_SETS_NEXT_MOUNTH,
    });

  const userSetsPrevMonth = () =>
    dispatch({
      type: SAVING_GOALS_ACTIONS.USER_SETS_PREV_MOUNTH,
    });

  const userSubmitsForm = (e) => {
    e.preventDefault();
    return dispatch({
      type: SAVING_GOALS_ACTIONS.USER_SUBMITS_FORM,
    });
  };

  const getMonthName = () => DateUtils.getMonthName(state.reachDate.month);

  const isPrevMonthDisabled = () => {
    const today = new Date();
    return (
      today.getMonth() + 1 >= state.reachDate.month &&
      today.getFullYear() >= state.reachDate.year
    );
  };

  const appProcessGoal = () =>
    dispatch({
      type: SAVING_GOALS_ACTIONS.APP_PROCESS_GOAL,
    });

  useEffect(() => {
    appProcessGoal();
  }, [state.amount, state.reachDate.month, state.reachDate.year]);

  return {
    state,
    userTypesAmount,
    userSetsNextMonth,
    userSetsPrevMonth,
    userSubmitsForm,
    isPrevMonthDisabled,
    getMonthName,
  };
}
export default useSavingGoals;
