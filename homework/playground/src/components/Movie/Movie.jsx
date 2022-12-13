import './Movie.css';

function Movie(props) {
    return <div className="movie-preview" key={props.id}>
        <h2>{props.name}</h2>
        <p>Directed by {props.director}</p>
        <iframe width="420" height="315"
                src={props.trailer} title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
    </div>
}

export default Movie;