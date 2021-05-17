"use strict";

function About() {
    return (
        <React.Fragment>
            <p>
                <img src="/static/img/balloonicorn.jpg"></img>
            </p>
            <p>
                Hi I'm Balloonicorn. I like to trade cards of my friends with my friends.
            </p>
        </React.Fragment>
    );
}

ReactDOM.render(
    <About />,
    document.querySelector("#about")
);