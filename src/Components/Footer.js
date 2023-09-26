import React from "react"
import logo1 from "./Pic/logo-bottom.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                    <div className='img'>
                        <img src={logo1} alt='' className="footer-logo" />
                    </div>
                    <p> 2021. All rights reserved by Srihari Muppalla.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer