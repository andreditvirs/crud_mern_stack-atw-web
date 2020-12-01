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
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/posts/delete/${id}`).then(res => {
      alert(res.data.title + "has been deleted Successfully");
      this.getPosts();
    })
  }

  filterContent(posts, searchTerm){
    const result = posts.filter((post) => 
      post.title.toLowerCase().includes(searchTerm) || 
      post.description.toLowerCase().includes(searchTerm) ||
      post.postCategory.toLowerCase().includes(searchTerm)
    );
    this.setState({
      posts: result
    });
  }

  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;

    axios.get("http://localhost:5000/posts").then(res => {
      if(res.data.success){
        this.filterContent(res.data.posts, searchTerm);
      }
    });
  }

  render() { 
  return <div className="container">
    <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
        <h4>All Posts</h4>
      </div>
      <div className="col-lg-3 mt-2 mb-2">
        <input
          className="form-control"
          type="search"
          placeholder="Cari disini"
          name="searchForm"
          onChange={ this.handleTextSearch }
        ></input>
      </div>
    </div>
    <table className="table">
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
        <td dangerouslySetInnerHTML = {{ __html:post.description }}>{}</td>
        <td>{post.postCategory}</td>
        <td>
          <a className="btn btn-warning" href={ `/edit/${post._id}` }>
            <i className="fas fa-edit"></i>&nbsp;Edit
          </a>
          &nbsp;
          <a className="btn btn-danger" onClick={() => this.onDelete(post._id) }>
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