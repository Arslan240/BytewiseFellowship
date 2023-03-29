import { useEffect, useState } from 'react';
import styled from 'styled-components'
import OverviewComponent from './OverviewComponent';
import TransactionComponent from './TransactionComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin: 1.5em 0;
  align-items: center;
  width: 360px;
`

const HomeComponent = (props) => {
  const [transactions, udpateTransactions] = useState([])
  const [expense, updateExpense] = useState(0)
  const [income, udpateIncome] = useState(0)


  const addTransactions = (payload) => {
    udpateTransactions([...transactions, payload])
  }

  const calculateBalance = () => {
    let exp = 0
    let inc = 0

    transactions.map(transaction => {
      transaction.type === "EXPENSE"
        ? exp = exp + transaction.amount
        : inc = inc + transaction.amount
    })
    updateExpense(exp)
    udpateIncome(inc)
  }

  // using useEffect hook to calculate expense and income at right time only
  useEffect(() => { 
    calculateBalance();
   }, [transactions])

  return (
    <Container>
      <OverviewComponent addTransactions={addTransactions} transactions={transactions} expense={expense} income={income}/>
      <TransactionComponent transactions={transactions} />
    </Container>
  )
};

export default HomeComponent