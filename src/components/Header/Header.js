import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



function Header(props){
        console.log('HEADER PROPS',props)
    return(<div>
        <img src={props.userAisle.user.profile_pic}/>
        <h1>{props.userAisle.user.username}</h1>
        <nav className='menu'>
            <Link to="/">Login</Link>
            <Link to="/Dashboard">🏠</Link>
            <Link to="/NewPost">📄</Link>
            <Link to='/'>Logout</Link>
            

        </nav>
        
    </div>
    )
}
const mapStateToProps = state => state;
export default connect(mapStateToProps) (Header);