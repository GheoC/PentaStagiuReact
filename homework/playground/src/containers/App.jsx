import Movie from "../components/Movie";
import {useState} from "react";
import '../components/Movie/Movie.css';

function App() {
    const [movies, setMovies] = useState([
        {name: 'Gladiator', director: 'John', id: 1},
        {name: 'Batman Returns', director: 'Will', id: 2},
        {name: 'Lord of the rings', director: 'Bob', id: 3}
    ]);

    const [userLogged, setUserLogged] = useState(false);

    const authenticate = function (auth) {
        setUserLogged(auth);
    }

    return <>
        <h2>Hello George</h2>
        <button onClick={()=> authenticate(true)}>Click me</button>

        {userLogged && (
            <div className="movie-container">
                {movies.map((movie) => <Movie key={movie.id} name={movie.name} director={movie.director}
                                              id={movie.id}/>)}
            </div>)}
    </>
}

export default App;