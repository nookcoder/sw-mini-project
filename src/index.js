import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Details from "./pages/Details";

const router = createBrowserRouter([{
  path: '/', element: <App />,
}, {
  path: '/about', element: <About />,
}, {
  path: '/detail/:type', element: <Details />,
}])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
