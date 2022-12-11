import React from "react";
import {createRoot} from "react-dom/client";
import App from "./containers/App";

const root = document.getElementById('root');
const main = createRoot(root);

// React renders Primitives, String, React Elements, null or undefined
// React CANNOT render OBJECT and FUNCTIONS
const title = <h2 className='title'>Hello from React</h2>;
const titleComponent = React.createElement('h2', {className: 'title'}, 'Hello from React Component');

function Header() {
    return <h1> This is from Header</h1>
}

// Conclusion: a REACT Component is a function javascript that returns one or more React Components, a String or a Number
function Title() {
    const name = 'React training';
    //Good Practice: use <> instead of <div>
    return <>
        <Header/>
        {titleComponent}
        {title}
        <div>This is a String!</div>
        <p>{name}</p>
        <p>155</p>
    </>
}
// main.render(<Title/>);

main.render(<App/>);