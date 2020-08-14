import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser,registerUser} from '../../redux/userAisle';


class LoginLogout extends Component{
constructor(){
    super();

    this.state={
        username:'',
        password:'',
        profile_pic: ''
        
    }
}

handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

render(){
    console.log('What is on my state?', this.state)
    console.log('PROPS', this.props)

    const { username, password, profile_pic}= this.state;
return (<div>
        <h1>Helo</h1>

<div>
        <h1>Username</h1>
        <input onChange={(event)=>this.handleChange(event)} value={username} name='username'/>
        <h1>Password</h1>
        <input onChange={(event)=>this.handleChange(event)} value={password} name='password'/>
        <input onChange={(event) => this.handleChange(event)} value={profile_pic} name='profile_pic' placeholder='Profile Pic'/>
   <div>
       <button onClick={()=>this.props.loginUser(username, password)}>Login</button>
            <button onClick={() => this.props.registerUser(username, password, profile_pic)}>Register</button>
   </div>
</div>   


    {/* <div>
        <input onChange={e =>this.handleChange(e)} placeholder='New UserName'/>
        <input onChange={e =>this.handleChange(e)} placeholder='New Password'/>
        
        <button onClick={()=>this.props.registerUser(username, password)}>Register</button>
        
    </div> */}
    



     </div>
        
    )
}
}
const mapStateToProps = state=> state;
export default connect(mapStateToProps, { loginUser, registerUser}) (LoginLogout);