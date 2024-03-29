import React from 'react'

import facebookIcon from '../assets/fb.png'
import instagramIcon from '../assets/ig.png'
import twitterIcon from '../assets/tw.png'


const SocialLinks = () => {
    return (
        <div className="social-links">
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
        </div>
    )
}

export default SocialLinks