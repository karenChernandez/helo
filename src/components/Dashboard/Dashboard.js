import React from 'react';
import {connect} from 'react-redux';
import {getPost} from '../../redux/postAisle';



function Dashboard(){

   
    return (<div>
        <h1>This is the Dashboard Component</h1>
        
        
     
    </div>
    )
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getPost})  (Dashboard);