import { Link } from "react-router-dom"

// Link component is just like a tag with 'to' attribute replacing 'href' attribute.

export function BookList(){
    return (
        <>
            <h1>BookList</h1>
            {/* This layout is common in all books components So we make a new component of it and add it our Parent Route and it'll render for all child routes. */}
            {/* <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to="/books/new">New Book</Link> */}
        </>
    )
}

