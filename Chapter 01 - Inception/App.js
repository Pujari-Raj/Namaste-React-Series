const reactheading = React.createElement(
  "h1",
  { id: "react-heading" }, // (attributes) this object is used to give the attributes to a tag(id,class,etc)
  "Hello World From React" // (childrens)
);

console.log(reactheading); // ( returns object)
/*When we're adding any element in page in react bts it adds one object for each element and not tag |element directly into the webpage  */

/* Uncomment Below to code to run above code */
// const reactroot = ReactDOM.createRoot(document.getElementById("root"));
// reactroot.render(reactheading);

/*
 *   <div id="parent">
 *       <div id="child-1">
 *           <h1> H1 tag from child-1 </h1>
 *           <h4> H4 tag from child-1 </h4>
 *       </div>
 *       <div id="child-2">
 *           <h1> H1 tag from child-2 </h1>
 *           <h4> H4 tag from child-2 </h4>
 *       </div>
 *      <div id="child-3">
 *           <h1> H1 tag from child-3 </h1>
 *           <h4> H4 tag from child-3 </h4>
 *       </div>
 *   </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement(
      "h1",
      { id: "react-heading" },
      "H1 tag from child-1" // (childrens)
    ),
    React.createElement(
        "h4",
        { id: "react-heading" },
        "H4 tag from child-1" // (childrens)
      ),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement(
      "h1",
      { id: "react-heading" },
      "H1 tag from child-2" // (childrens)
    ),
    React.createElement(
        "h4",
        { id: "react-heading" },
        "H4 tag from child-2" // (childrens)
      ),
  ]),
  React.createElement("div", { id: "child-3" }, [
    React.createElement(
      "h1",
      { id: "react-heading" },
      "H1 tag from child-3" // (childrens)
    ),
    React.createElement(
        "h4",
        { id: "react-heading" },
        "H4 tag from child-3" // (childrens)
      ),
  ])
]);

/* React converts the ReactElement(Object) => plain HTML(that Browser Understands) */

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(parent);