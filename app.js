{
  /* <div id="parent">
    <div id="child">
        <h1> hello i'm arshiya!</h1>
        <h2> hello i'm feeling hopeless!</h2>
    </div>
       <div id="child2">
        <h1> A girl has no name!</h1>
      
    </div>
</div> */
}
// to make code neat we will be using jsx
const heading = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello i'm arshiya!"),
    React.createElement("h2", {}, "are you feeling hopeless? Trust God <3"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "A girl has no name!"),
  ])
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
