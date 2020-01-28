// import React from 'react';
// import {connect} from 'react-redux';
// import Card from './Card';

// function MainBody(props) {
//     let testImg = {testImg:"house"};
        

//     return (
//         <div className="MainBody">

//             {props.posts && props.posts ? props.posts.map(function(item,i){
//                return <Card key={i} item={item} testImg={testImg} />
               
//             }): <h1>Not Working</h1>}
//         </div>
//     )
// }

// const mapStateToProps = (state )=> ({
//     posts: state.posts.items,
// })

// export default connect (mapStateToProps)(MainBody);

import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/postActions'
import Card from './Card';

class MainBody extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
            console.log(this.props.posts)
            let testImg = {testImg:"house"};
        return (
                    <div className="MainBody">
                        { this.props.posts.map(function(item,i){
                           return <Card key={i} item={item} testImg={testImg} />
                           
                        })}
                    </div>
                )
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items
})

export default connect (mapStateToProps, {fetchPosts})(MainBody)