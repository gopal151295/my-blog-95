import React, { Component } from "react";
import { connect } from "react-redux";

import PostListItem from "./PostListItem";
// import { addPosts } from "../actions/postActions";
import { asyncFetchAllPosts } from '../actions'
class PostList extends Component {
	componentDidMount() {
		this.props.asyncFetchAllPosts();
	}

	render() {
		return (
			<div className="mb-0 mt-5">
				{this.props.posts.map((post) => {
					return <PostListItem key={post._id} {...post} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.postReducer.post,
		posts: state.postReducer.posts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		asyncFetchAllPosts: () => dispatch(asyncFetchAllPosts())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);
