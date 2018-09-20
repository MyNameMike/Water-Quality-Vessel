import React from 'react';

const intro = (props) => { //const is a constant variable declaration, then => is arrow function to declare the variable itself, props like parameters
    return ( // multiple lines with () from return so we can return many lines and wrap paragraphs
        <div>
        <p></p>
        <h1>{props.children}</h1>
        </div>
    )
};//props children is used specifically for <Intro <INFO> > LIT </Intro> lit part

export default intro;