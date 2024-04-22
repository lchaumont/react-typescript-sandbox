import React from "react";

// https://react.dev/reference/react/createElement
// createElement(type, props, ...children) 
const MyComponent = React.createElement("div", null, React.createElement("h1", null, "Hello World"));

/*
    <div>
        <h1>Hello World</h1>
    </div>
*/
