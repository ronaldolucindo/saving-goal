import React from 'react';
import Card from 'components/card/Card';
import Header from 'components/header/Header';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import DateInput from 'components/date-input/DateInput';
import ResultSummary from './components/result-summary/ResultSummary';
import useSavingGoals from './useSavingGoals';

import './SavingGoalsPage.scss';
import { ReactComponent as DollarSign } from 'assets/icons/dollar-sign.svg';
import { ReactComponent as HouseIcon } from 'assets/icons/buy-a-house.svg';

function SavingGoalsPage() {
  const { state, ...actions } = useSavingGoals();

  return (
    <>
      <Header />
      <main className="saving-goals">
        <section className="saving-goals-content">
          <h3>
            {` Let's`} plan your <strong>saving goal</strong>.
          </h3>
          <Card>
            <div className="card-header">
              <HouseIcon className="header-icon" />
              <div className="text-container">
                <h2>Buy a house</h2>
                <p className="subtitle">Saving goal</p>
              </div>
            </div>
            <form noValidate onSubmit={actions.userSubmitsForm}>
              <div className="input-container">
                <div className="total-amount">
                  <Input
                    label="Total amount"
                    value={state.amount}
                    onChange={actions.userTypesAmount}
                    pattern="[0-9]"
                    prepend={<DollarSign />}
                  />
                </div>
                <div className="reach-date">
                  <DateInput
                    label="Reach goal by"
                    yearValue={state.reachDate.year}
                    monthValue={actions.getMonthName()}
                    onNextMonth={actions.userSetsNextMonth}
                    onPrevMonth={actions.userSetsPrevMonth}
                    isPrevMonthDisabled={actions.isPrevMonthDisabled()}
                  />
                </div>
              </div>

              {state.canSubmit && (
                <>
                  <ResultSummary
                    monthDeadline={actions.getMonthName()}
                    yearDeadline={state.reachDate.year}
                    monthlyAmount={state.monthlyAmount}
                    totalMonths={state.totalMonth}
                    totalValue={state.amount}
                  />
                  <div className="actions-container">
                    <Button type="submit">Confirm</Button>
                  </div>
                </>
              )}
            </form>
          </Card>
        </section>
      </main>
    </>
  );
}

export default SavingGoalsPage;
