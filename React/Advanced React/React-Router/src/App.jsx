import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { BookList } from './pages/BookList'
import { Book } from './pages/Book'
import { NewBook } from './pages/NewBook'
import { NotFound } from './pages/NotFound'

import './App.css'
import { BookLayout } from './pages/BookLayout'
import { BookRoutes } from './pages/BookRoutes'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Nesting Routes */}
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App


//Route specificity
/**
 * If we have a dynamic route like /books/:id and a hardcoded route like /books/new
 * If we run /books/new In previous versions it would take new as id of the book and try to render that book
 * But in react-router-6 react checks if any hardcoded route matches or not.
 */

// Nesting Layout
/**
 * We nest routes inside a route by passing them as children,
 * Their url is relative to parent url parent/childWhatever,
 * we can have related urls in a single place.
 * To specify the Main url we use index keyword for a route and it'll direct to main route
 *
 * We can also have shared layout between the components which are not related to each other by url,
 * but need to have same navigation. We do this by just removing path attribute from Parent Route.
 */

// Passing context in <Outlet/> Component
/**
 * In outlet we have an attribute called context which works just like react context
 * and we can access it in child routes by using useOutletContext() hook.
 */