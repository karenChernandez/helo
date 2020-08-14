import React from 'react';
import { Link } from 'react-router-dom';



function Header(){

    return(<div>
        <h1>LOGO!</h1>
        <nav className='menu'>
            <Link to="/"></Link>
            <Link to="/HomePage">🏠</Link>
            <Link to="/NewPost">📄</Link>

        </nav>
        
    </div>
    )
}
export default Header;