import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

const UsersContainer = styled.div`
    
`

const User = styled.div`
    width: 100%;
    background-color: #d4f2faaa;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    & div {
        text-align: left;
    }
    & span {
        margin-right: 5px;
    }
    & .label {
        letter-spacing: 1px;
    }

`

const Users = () => {
    const {users} = useGlobalContext();

  return (
    <UsersContainer>
        <h1>Users</h1>
        {users?.map((user) => { 
            return (
                <User key={user.id}>
                    <div>
                        <span className='label'>Name: </span>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span className='label'>Email: </span>
                        <span>{user.email}</span>
                    </div>
                </User>
            )
         })}
    </UsersContainer>
  )
}

export default Users