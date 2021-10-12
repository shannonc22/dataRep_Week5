import React, { Component } from 'react';
// import card from bootstrap
import Card from 'react-bootstrap/Card';
// class
class MovieItem extends Component {
    render() {
        return (
            // component content
            <div>
                {/* display movie title, poster and year */}
                {/* use cards to neatly display movie info */}

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster}></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}
// mark for export
export default MovieItem;