import React from "react";
import StarRatingComponent from 'react-star-rating-component';

import { Card } from "react-bootstrap";

const ListMovies = (props) => {
    return <div className="ListMovies">
        {props.movies.map(el => (
            <div className="movie">
        <Card style={{widh:"18rem"}}>
              <Card.Img
              variant="top"
              src={el.image}
              height="250px"
              />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.year}</Card.Text>
             <StarRatingComponent value={el.rating} /> 
              </Card.Body>
            </Card>
            </div>
        ))}
    </div>;
};

export default ListMovies;