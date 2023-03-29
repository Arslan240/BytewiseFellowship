import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin: 1.5em 0;
  align-items: center;
  width: 100%;
  & input,button {
    font-family: 'Montserrat', sans-serif;
  }
`

const BalanceBox = styled.div`
  font-size: 1em;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: .5em .7em;
  border-radius: .5em;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: .8em;
  margin-left: 1em;
`

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e6e8e9;
  gap: .5em;
  padding: 1em;
  margin: 1em 0;

  /* for a child element inside AddTransactionContainer */
  & input {
    outline: none;
    padding: .7em 1em;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: .5em 0;
  & input {
    width: unset;
    margin: 0 .5em;
  }
`

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5em;
  margin: .5em 0;
`

const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 140px;
  font-size: 1.1em;

  & span {
    font-weight:bold;
    font-size: 20px;
    /* we'll be using props for dynamic styling */
    color: ${props => props.isIncome ? 'green' : 'red'};
  }
`

const AddTransactionView = ({ toggleTxnVisibility, addTransactions }) => {
  const [EXPENSE, INCOME] = ["EXPENSE", "INCOME"];
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState(EXPENSE);

  const addTransaction = () => {
    toggleTxnVisibility();
    // toggleTxnVisibility(false);
    addTransactions({ amount: Number(amount), desc, type, id: Date.now() })
    console.log();
  }

  return (
    <AddTransactionContainer>
      <input placeholder='Amount' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
      <RadioBox>
        {/* we check the expense or income based on the state "type". By comparing them in  */}
        <input type="radio" name="type" id="expense" value={EXPENSE} checked={type === EXPENSE} onChange={(e) => setType(e.target.value)} />
        <label htmlFor="expense">Expense</label>
        <input type="radio" name="type" id="income" value={INCOME} checked={type === INCOME} onChange={(e) => setType(e.target.value)} />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
}



const OverviewComponent = ({ addTransactions, expense, income }) => {
  const [isAddTxnVisible, toggleTxnVisibility] = useState(false)

  return (
    <Container>
      <BalanceBox>
        Balance: ${income - expense}
        <AddTransaction onClick={() => toggleTxnVisibility(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "ADD"}</AddTransaction>
      </BalanceBox>
      {/* we're passing toggleTxnVisibility as prop because when a transaction is added, the AddTransactionView should be closed and that functionality is in toggleTxnVisibility */}
      {isAddTxnVisible && <AddTransactionView toggleTxnVisibility={toggleTxnVisibility} addTransactions={addTransactions} />}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>${expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  )
};

export default OverviewComponent