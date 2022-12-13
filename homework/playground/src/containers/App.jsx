import Movie from "../components/Movie";
import {useState} from "react";
import '../components/Movie/Movie.css';
import Login from "../components/Login";

function App() {
    const [movies, setMovies] = useState([
        {name: 'Gladiator', director: 'John', id: 1, trailer:'https://www.youtube.com/embed/uvbavW31adA'},
        {name: 'Batman Returns', director: 'Will', id: 2, trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY'},
        {name: 'Lord of the rings', director: 'Bob', id: 3, trailer: 'https://www.youtube.com/embed/N4xV2RIlMi4'}
    ]);

    const [userLogged, setUserLogged] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState({username: 'visitor'});

    const authenticate = function (auth) {
        setUserLogged(auth);
        setAuthenticatedUser({username: 'visitor'})
    }

    const authUser = function (u){
        setAuthenticatedUser(u)
    }

    return <>
        <h2>Hello {authenticatedUser?.username}</h2>

        {!userLogged && (<Login authenticate={authenticate} setAuth={authUser}/>)}

        {userLogged && (
            <div className="movie-container">
                {movies.map((movie) => <Movie key={movie.id} name={movie.name} director={movie.director}
                                              trailer={movie.trailer}  id={movie.id}/>)} </div>)}
        {userLogged && <h1>welcome {authenticatedUser?.username}</h1>}
        {userLogged && (<button onClick={() => authenticate(false)}>Log out</button>)}

        {userLogged && authenticatedUser?.role ==='admin' &&(<h2>Secret message for ADMIN'S only</h2>)}
    </>
}

export default App;