import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../../../Admin/Admin'
import { Bounce, ToastContainer } from "react-toastify";

const AdminRouters = () => {
  return (

    <div className=''>
        <Routes>
          <Route path='/*' element={<Admin/>}></Route>
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
    
  )
}

export default AdminRouters