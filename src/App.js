import React from "react"
import Header from "./Components/Header/Header"
import Features from "./Components/Features/Features"
import Home from "./Components/Hero/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Resume from "./Components/Resume/Resume"
import Testimonial from "./Components/Testimonial/Testimonial"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Features />
            <Portfolio />
            <Resume />
            <Testimonial />
            <Blog />
            <Contact />
            <Footer />
        </>
    )
}

export default App