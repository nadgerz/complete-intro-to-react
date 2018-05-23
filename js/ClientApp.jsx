const ce = React.createElement;

const MyTitel = function( props ) {
  return (
    ce( "div", null,
        ce( "h1", {
          style: {
            color: props.color
          }
        }, "My Secind Component" )
    )
  );
};

const MyFirstComponent = function() {
  return ce( "div", null,
             ce( "h1", { id: "barp" }, "This is my first component!!" ),
             [
               ce( MyTitel, { title: "Bibble", color: "YellowGreen" } ),
               ce( MyTitel, { title: "Babble", color: "GreenYellow" } ),
               ce( MyTitel, { title: "Bobble", color: "LimeGreen" } ),
               ce( MyTitel, { title: "Narp", color: "lime" } )
             ]
  );
};

ReactDOM.render(
  ce( MyFirstComponent ),
  document.getElementById( "app" )
);
