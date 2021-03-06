import React, { Component } from "react";
import { Icon } from "antd";

class Review extends Component {
  render() {
    const { reviewList } = this.props;

    const postReviews = reviewList.map((review, index) => (
      <div key={index}>
        <blockquote className="blockquote">
          <Icon type="star" theme="filled" />
          <Icon type="star" theme="filled" />
          <Icon type="star" theme="filled" />
          <Icon type="star" theme="filled" />
          <Icon type="star" />
          <p className="mb-0">{review.description}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{review.user.username}</cite>
          </footer>
        </blockquote>
      </div>
    ));
    return (
      <div>
        <h4>Reviews</h4>
        {postReviews}
      </div>
    );
  }
}

export default Review;
