import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();
  const HandleHomepage = ()=>{
    navigate("/");
  }
  return (
    <div className='text-center py-5'>
        <h1>Page Not Found</h1> <br />
        <button onClick={HandleHomepage} className='btn btn-outline-primary px-3 fs-3 font-poppins'>Back to Home Page</button>
    </div>
  )
}

export default PageNotFound