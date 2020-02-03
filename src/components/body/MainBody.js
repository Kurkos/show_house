import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import Card from "./Card";

function MainBody(props) {
  const [picTag] = useState({ testImg: "house" });
  useEffect(() => {
    props.fetchPosts();
  });

  return (
    <div className="MainBody">
      {props.posts && props.posts ? (
        props.posts.map(function(item, i) {
          return <Card key={i} item={item} testImg={picTag} />;
        })
      ) : (
        <h1>Not Working</h1>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(MainBody);
