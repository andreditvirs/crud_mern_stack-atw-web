import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts(){
    axios.get("http://localhost:5000/posts").then(res => {
      if(res.data.success){
        this.setState({
          posts: res.data.posts,
        });
        console.log(this.state.posts);
      }
    });
  }

  render() { 
  return <div>{this.state.posts.map(
    post => (
      <div>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>{post.postCategory}</p>
      </div>
    )
  )}
  </div>
  }
}
 
export default App;