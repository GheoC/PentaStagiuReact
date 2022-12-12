import Navbar from "./Navbar";

function Header(props) {
    return <>
        <header>Header from Component with title: {props.navigationTitle}</header>
        <Navbar
            navigationTitle={props.navigationTitle}
            user={props.user}
            resetTitle={props.resetTitle}
        />
    </>;
}

export default Header;