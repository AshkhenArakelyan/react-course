const parent = React.createElement( //object(react element)
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement(
            "h1",
            {id: "heading"},
            "Hello from React")
        , React.createElement(
            "h1",
            {id: "heading"},
            "Hello from React")
        ]
        ))
// const heading = React.createElement("h1", {id: "heading"}, "Hello from React") // object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent.current)