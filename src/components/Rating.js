import react, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
export default class Rating extends component {
    state = {
        rating: 1,
    };
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue });
        this.props.rating(nextValue)
    };
    render () {
        return (
            <div>
                <StarRatingComponent
                starCount={5}
                value={this.state.Rating}
                onStarClick={this.onStarClick}
                />
            </div>
        );
    }
}