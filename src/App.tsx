import { Home } from './pages/Home'
import GlobalStyle from './styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
