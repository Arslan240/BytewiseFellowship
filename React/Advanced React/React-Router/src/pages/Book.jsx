import { useOutletContext, useParams } from "react-router-dom"

// useParams hook of react-router provides us all the parameters of the request

export function Book() {
    const {id} = useParams()
    const {hello} = useOutletContext()
    return (
        <>
            <h1>Book {id} {hello}</h1>
            {/* <h1>Book {id} </h1> */}
        </>
    )
}

/**
 * useOutletContext() gives us the context passed down by outlet component
 */