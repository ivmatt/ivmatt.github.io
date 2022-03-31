import React from 'react'

import { About, Contact, Footer, Header, Landing, Projects } from './containers'
import { Navbar } from './components'

const App = () => {
    return (
        <div className="App">
            <div className="solid_bg">
                <Navbar />
                <Header />
            </div>
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App