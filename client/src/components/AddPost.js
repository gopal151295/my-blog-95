import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { asyncFetchAllPosts } from "../actions";

class AddPost extends Component {
	state = { title: "", body: "", redirect: false };

	onFormSubmit = (event) => {
		event.preventDefault();
		const postData = { post: { ...this.state } };
		this.props.addPost(postData).then((response) => {
			this.setState({ redirect: true, _id: response._id });
		});
	};

	render() {
		let {redirect} = this.state;

		if (redirect) {
			return <Redirect to={`/posts/${this.state._id}`} />;
		}

		return (
			<div className="card my-4 mt-5">
				<h3 className="card-header">Add New Post</h3>
				<div className="card-body">
					<form onSubmit={this.onFormSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								className="form-control"
								placeholder="Enter Title"
								value={this.state.title}
								onChange={(e) => this.setState({ title: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="body">Body</label>
							<textarea
								rows="5"
								type="text"
								id="body"
								className="form-control"
								placeholder="Enter Body"
								value={this.state.body}
								onChange={(e) => this.setState({ body: e.target.value })}
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.postReducer.post,
		posts: state.postReducer.posts,
		authUser: state.authReducer.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (postData) => dispatch(asyncFetchAllPosts(postData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddPost);
