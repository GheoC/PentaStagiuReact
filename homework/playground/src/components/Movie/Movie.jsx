import './Movie.css';

function Movie(props) {
    return <div className="movie-preview" key={props.id}>
        <h2>{props.name}</h2>
        <p>Written by {props.director}</p>
    </div>
}

export default Movie;