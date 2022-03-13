// var React = require("react");
// var ReactDOM = require("react-dom");
// instead of the above two lines we can write
import React from "react";
import ReactDOM from "react-dom";
// from "react"-> react module

//** to use react or to make react do something , we have to 1st render it

//**  ReactDOM.render(WHAT TO SHOW ,WHERE TO SHOW IT , CALL BACK FUN)

ReactDOM.render(<h1>Hello tushar</h1>, document.getElementById("root"));
//**  we are using reactdom module's render method
//** show h1 and get reference to root id
//here we are in a javascript file and we can write palin html codes.
//react creates this JSX files for this
//Babel is a compiler that compiles the above react code to js code
//Babel converts next gen js to browser friendly js so that every browser can understand it

// we could have achieved the same result using js
var h1 = document.createElement("h1");
h1.innerHTML = "Hello tushar!";
document.getElementById("root").appendChild(h1);

// ReactDOM.render(<h1>Hello tushar</h1>, document.getElementById("root"));
// we can write only one html element inside render

// ReactDOM.render(<h1>Hello tushar</h1><p>paragraph</p>, document.getElementById("root"));
// writing something like this gives error
// but it can be solved by wrapping h1 and p inside a div tag

ReactDOM.render(
  <div>
    <h1>Hello tushar</h1>
    <p>paragraph</p>
  </div>,
  document.getElementById("root")
);
