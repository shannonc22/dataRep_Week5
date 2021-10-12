import React, { Component } from 'react';
import MovieItem from './movieitem';
// class
export class Movies extends React.Component {
    render() {
        return this.props.films.map((film) => {
            // embed movie item component
            // PASSING DATA FROM MOVIES TO MOVIE ITEM
            return <MovieItem movie={film} key={film.imdbID}></MovieItem>
        })

    }
}
// mark for export
export default Movies;