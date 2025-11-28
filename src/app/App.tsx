import React from 'react'
import '../style.scss'
import Header from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer'
import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App