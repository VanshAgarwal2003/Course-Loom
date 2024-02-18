import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import WebHeader from '../component/WebHeader'
import StoreCourse from '../store/course-list-store'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <StoreCourse>
          <div className='appContainer'>
            <div className='content'>
              <WebHeader></WebHeader>
              <Outlet></Outlet>
            </div>
          </div>
      </StoreCourse>
    </>
  )
}
