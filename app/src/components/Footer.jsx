import React, { useState } from 'react';

import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'


const Footer = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }

    return (
        <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>
            <h1 className='logo'></h1>
            
            <ul>
                <a href="https://www.facebook.com/profile.php?id=100081500887925"> Facebook</a>
                <a href="https://www.instagram.com/uthkirov_boburbek/">Instagram</a>
                <a href="https://www.wattpad.com/user/BoburbekUthkirov">Wattpad</a>
                <a href="https://www.linkedin.com/in/boburbek-uthkirov-bb4265243/">Linkedin</a>
                <a href="https://www.reddit.com/user/NoElderberry3284">reddit</a>
                <a href="https://www.pinterest.com/boburbekutkirov/_saved/">Pinterest</a>
                <a href="https://www.behance.net/boburbeuthkiro">behance</a>
                <a href="https://github.com/Utkirov2006">Git hub</a>
            </ul>

            
            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>
        </div>
    );
};

export default Footer;