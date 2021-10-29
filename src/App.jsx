import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import './_app.scss'

const App = () => {
    return (
        <div>
           <Header />
           <div className="app__container">
            <Sidebar />     
            <div className="app__main">
                <HomePage />
            </div>
           </div>
        </div>
    )
}

export default App
