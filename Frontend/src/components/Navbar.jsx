import React, { useState } from 'react'
import slimeImg from '../assets/slime.png'
import menuIcon from '../assets/menu.png'

const Navbar = () => {
    // const [isDisplay, setIsDisplay] = useState(false)
    const [bounce, setBoune] = useState('')

    // const toggleMenu = () => setIsDisplay(!isDisplay)

    const makeBounce = () => {
        setBoune('gelatine')
        setTimeout(() => setBoune(''), 1300)
    }

    return (
        <div className="navbar">
            <img src={slimeImg} alt="logo" className={`logo ${bounce}`} onClick={makeBounce} />
            {/* <nav>
                <ul style={{ display: isDisplay ? 'block' : 'none' }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </nav>
            <img src={menuIcon} alt="menu-icon" className="menu-icon" onClick={toggleMenu} /> */}
        </div>

    )
}

export default Navbar