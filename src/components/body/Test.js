import React, { Component } from "react";
import TestForm from "./TestFrom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

class Test extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <TestForm />
        <hr />
        <h1>Post items</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Test);
