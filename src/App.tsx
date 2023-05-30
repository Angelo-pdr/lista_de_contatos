import { Home } from './pages/Home'
import NewContact from './pages/Register'
import Favorites from './pages/favorites'
import GlobalStyle from './styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/favoritos',
    element: <Favorites />
  },
  {
    path: '/novo',
    element: <NewContact />
  }
])

const App = () => {
  return (
    <>
      <GlobalStyle />
      <>
        <RouterProvider router={routes} />
      </>
    </>
  )
}

export default App
