"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>
        Thanks for visiting and looking at my React-built trading cards.
      </p>
      <p>
        <a href="/cards">View Trading Cards</a>
      </p>
      <p>
        <img src="/static/img/balloonicorn.jpg"></img>
      </p>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Homepage />,
  document.querySelector('#app')
);
