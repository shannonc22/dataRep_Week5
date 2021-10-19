import React, { Component } from 'react';
// class
class Create extends Component {
    constructor() {
        super();
        // event handlers
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        // define title, year, poster
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    // handleSubmit function
    handleSubmit(event) {
        console.log("Name: " +this.state.Title+
        " Year: " +this.state.Year +
        " Poster: " +this.state.Poster);
        event.preventDefault();
        this.state({
            Title: '',
            Year: '',
            Poster: ''
        });

    }
    // updating title according to text input
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    // updating Year according to text input
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

   

    render() {
        return (
            <div>
                {/* form with input */}
                <h1>This is my create component</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* add movie name */}
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    {/* add movie year */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    {/* add movie poster */}
                    <div className="form-group">
                        <label>Add Movie Poster URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    {/* submit button */}
                    <div>
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}
// mark for export
export default Create;