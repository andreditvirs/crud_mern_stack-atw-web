import React, { Component } from 'react';
import axios from "axios";

class LandingPage extends Component {
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
  return <div className="container">
    <p>All Post</p>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map(
      (post, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td><a href={`/posts/${post._id}`}>{post.title}</a></td>
        <td>{post.description}</td>
        <td>{post.postCategory}</td>
        <td>
          <a className="btn btn-warning" href="#">
            <i className="fas fa-edit"></i>&nbsp;Edit
          </a>
          &nbsp;
          <a className="btn btn-danger" href="#">
            <i className="far fa-trash-alt"></i>&nbsp;Delete
          </a>
          </td>
      </tr>
      )
    )}
    </tbody>
  </table>
  <button className="btn btn-success"><a href="/add">Add New Post</a></button>
  </div>
  }
}
 
export default LandingPage;