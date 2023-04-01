import { Link, Outlet } from "react-router-dom"

export function BookLayout() {
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to="/books/new">New Book</Link>
            <Outlet context={{hello: "World"}}/>
        </>
    )
}

/**
 * As booklayout is rendered by parent element, it is shared in all children routes
 * Now for children routes to render out, we use a component called <Outlet/> in the place where we want to render all the child components when they are requested.
 */