import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { nanoid } from 'nanoid'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    
    & input {
        padding: 10px;

    }
`

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nameInputRef = useRef();
    const { setUsers } = useGlobalContext(); // custom hook gives access to global context with global state.

    const handleForm = () => {
        console.log("Form is handling")
        setUsers(prevUsers => [...prevUsers, { id: nanoid(),name, email, password }])
    }

    useEffect(() => {
        nameInputRef.current.focus();
    }, [])


    return (
        <Form>
            <input type="text" placeholder='Name'
                value={name}
                onChange={e => setName(e.target.value)}
                ref={nameInputRef}
            />
            <input type="email" placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleForm}>Submit</button>
        </Form>
    )
}

export default AddUser