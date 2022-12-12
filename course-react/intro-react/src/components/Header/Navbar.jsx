import "./Navbar.css";

function Navbar(props){
    return <>
        <header className="nav-bar">
            <div className="navigation-bar">{props.navigationTitle}</div>
            <div className="logo-container">user: {props.user?.name}</div>
            <button onClick={props.resetTitle}>Reset title</button>
        </header>
    </>
}

export default Navbar;