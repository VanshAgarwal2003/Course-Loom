import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './routes//App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Course from './component/Course.jsx'
import HomeContent from './component/HomeContent.jsx'
import appStore from './store/index.js'
import { Provider } from 'react-redux'
import AddCourse from './component/AddCourse.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeContent /> },
      { path: "/course", element: <Course /> },
      { path: "/addCourse", element: <AddCourse /> }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
