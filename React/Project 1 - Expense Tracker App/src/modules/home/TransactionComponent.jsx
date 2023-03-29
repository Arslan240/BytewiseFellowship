import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin: 1.5em 0;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    width: 100%;
    background-color: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`

const Cell = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 2px;
    align-items: center;
    font-weight: normal;
    justify-content: space-between;
    border: 1px solid #e6e8e9;
    border-right: 4px solid ${(props) => props.isExpense ? "red" : "green"};
    width: 100%;
`

const TransacationCell = ({transaction}) => {
    return (
        <Cell isExpense={transaction?.type === "EXPENSE"} key={transaction.id}>
            <span>{transaction.desc}</span>
            <span>${transaction.amount}</span>
        </Cell>
    )
}

const TransactionComponent = ({ transactions }) => {
    const [searchText, setSearchText] = useState("")
    const [filteredTransaction, updateFilteredTransaction] = useState(transactions);

    const filterData = () => {
        // when searchText is empty
        if(!searchText || !searchText.trim().length){
            updateFilteredTransaction(transactions)
            return;
        }

        const filteredtxn = transactions.filter( transaction => transaction.desc.toLowerCase().includes(searchText.toLowerCase().trim()))
        updateFilteredTransaction(filteredtxn)
    }

    // search results change here
    useEffect(() => filterData(),[transactions, searchText])

    return (
        <Container>
            Transactions
            <input type="text" placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            { 
                filteredTransaction?.length 
                ? filteredTransaction.map((transaction) => { 
                    return <TransacationCell transaction={transaction}/>
                 })
                 : <></>
            }
        </Container>
    )
};

export default TransactionComponent