import React from 'react'
import Header from './components/Header'
import BottomBar from './components/BottomBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
      <BottomBar />
    </div>
  )
}

export default App