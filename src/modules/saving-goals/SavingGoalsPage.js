import React from 'react';
import Card from 'components/card/Card';
import Header from 'components/header/Header';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import './SavingGoalsPage.scss';
import { ReactComponent as DollarSign } from 'assets/icons/dollar-sign.svg';
import { ReactComponent as HouseIcon } from 'assets/icons/buy-a-house.svg';
import ResultSummary from './components/result-summary/ResultSummary';

function SavingGoalsPage() {
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
            <form noValidate>
              <Input label="Total amount" prepend={<DollarSign />} />

              <ResultSummary
                monthDeadline={'October'}
                yearDeadline={2022}
                monthlyAmount={1200}
                totalMonths={12}
                totalValue={20000}
              />
              <div className="actions-container">
                <Button>Confirm</Button>
              </div>
            </form>
          </Card>
        </section>
      </main>
    </>
  );
}

export default SavingGoalsPage;
