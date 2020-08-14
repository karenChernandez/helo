import React, { Component } from 'react';
import { connect } from 'react-redux';
import {newPost} from '../../redux/postAisle';


class NewPost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            image: '',
            content: ''
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        console.log('NewPost State', this.state)
        const { title, image, content } = this.state
        return (<div>
            <h1>This is the Dashboard Component</h1>
            <h1>Title:</h1>
            <input onChange={(e) => this.handleChange(e)} value={title} name='title' />
            <h1>Image URL:</h1>
            <input onChange={(e) => this.handleChange(e)} value={image} name='image' />
            <h1>Content:</h1>
            <input onChange={(e) => this.handleChange(e)} value={content} name='content' />
            <button onClick={() => this.props.newPost(title, image, content)}>Post</button>
        </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {newPost})(NewPost);