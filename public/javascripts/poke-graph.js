var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
  var DIR = "images/type_icons/";
  // create Poke Types
  var nodes = [
    // TODO - replace colors with images
    {
      id: "normal",
      label: "Normal",
      color: "#A8A77A",
      background: "#A8A77A",
      image: DIR + "Normal type.ico",
    },
    {
      id: "fire",
      label: "Fire",
      color: "#EE8130",
      background: "#EE8130",
      image: DIR + "Fire type.ico",
    },
    {
      id: "water",
      label: "Water",
      color: "#6390F0",
      background: "#6390F0",
      image: DIR + "Water type.ico",
    },
    {
      id: "electric",
      label: "Electric",
      color: "#F7D02C",
      background: "#F7D02C",
      image: DIR + "Electric type.ico",
    },
    {
      id: "grass",
      label: "Grass",
      color: "#7AC74C",
      background: "#7AC74C",
      image: DIR + "Grass type.ico",
    },
    {
      id: "ice",
      label: "Ice",
      color: "#96D9D6",
      background: "#96D9D6",
      image: DIR + "Ice type.ico",
    },
    {
      id: "fighting",
      label: "Fighting",
      color: "#C22E28",
      background: "#C22E28",
      image: DIR + "Fighting type.ico",
    },
    {
      id: "poison",
      label: "Poison",
      color: "#A33EA1",
      background: "#A33EA1",
      image: DIR + "Poison type.ico",
    },
    {
      id: "ground",
      label: "Ground",
      color: "#E2BF65",
      background: "#E2BF65",
      image: DIR + "Ground type.ico",
    },
    {
      id: "flying",
      label: "Flying",
      color: "#A98FF3",
      background: "#A98FF3",
      image: DIR + "Flying type.ico",
    },
    {
      id: "psychic",
      label: "Psychic",
      color: "#F95587",
      background: "#F95587",
      image: DIR + "Psychic type.ico",
    },
    {
      id: "bug",
      label: "Bug",
      color: "#A6B91A",
      background: "#A6B91A",
      image: DIR + "Bug type.ico",
    },
    {
      id: "rock",
      label: "Rock",
      color: "#B6A136",
      background: "#B6A136",
      image: DIR + "Rock type.ico",
    },
    {
      id: "ghost",
      label: "Ghost",
      color: "#735797",
      background: "#735797",
      image: DIR + "Ghost type.ico",
    },
    {
      id: "dragon",
      label: "Dragon",
      color: "#6F35FC",
      background: "#6F35FC",
      image: DIR + "Dragon type.ico",
    },
    {
      id: "dark",
      label: "Dark",
      color: "#705746",
      background: "#705746",
      image: DIR + "Dark type.ico",
    },
    {
      id: "steel",
      label: "Steel",
      color: "#B7B7CE",
      background: "#B7B7CE",
      image: DIR + "Steel type.ico",
    },
    {
      id: "fairy",
      label: "Fairy",
      color: "#D685AD",
      background: "#D685AD",
      image: DIR + "Fairy type.ico",
    },
  ].map((node, index, arr) => {
    const angle = 2 * Math.PI * (index / arr.length + 0.75);
    node.x = 400 * Math.cos(angle);
    node.y = 400 * Math.sin(angle);
    return node;
  });

  superEffectiveEdges = [
    { from: "fire", to: "grass", color: "green" },
    { from: "fire", to: "ice", color: "green" },
    { from: "fire", to: "bug", color: "green" },
    { from: "fire", to: "steel", color: "green" },
    { from: "water", to: "fire", color: "green" },
    { from: "water", to: "ground", color: "green" },
    { from: "water", to: "rock", color: "green" },
    { from: "electric", to: "water", color: "green" },
    { from: "electric", to: "flying", color: "green" },
    { from: "grass", to: "water", color: "green" },
    { from: "grass", to: "ground", color: "green" },
    { from: "grass", to: "rock", color: "green" },
    { from: "ice", to: "grass", color: "green" },
    { from: "ice", to: "ground", color: "green" },
    { from: "ice", to: "flying", color: "green" },
    { from: "ice", to: "dragon", color: "green" },
    { from: "fighting", to: "normal", color: "green" },
    { from: "fighting", to: "ice", color: "green" },
    { from: "fighting", to: "rock", color: "green" },
    { from: "fighting", to: "dark", color: "green" },
    { from: "fighting", to: "steel", color: "green" },
    { from: "poison", to: "grass", color: "green" },
    { from: "poison", to: "fairy", color: "green" },
    { from: "ground", to: "fire", color: "green" },
    { from: "ground", to: "electric", color: "green" },
    { from: "ground", to: "poison", color: "green" },
    { from: "ground", to: "rock", color: "green" },
    { from: "ground", to: "steel", color: "green" },
    { from: "flying", to: "grass", color: "green" },
    { from: "flying", to: "fighting", color: "green" },
    { from: "flying", to: "bug", color: "green" },
    { from: "psychic", to: "fighting", color: "green" },
    { from: "psychic", to: "poison", color: "green" },
    { from: "bug", to: "grass", color: "green" },
    { from: "bug", to: "psychic", color: "green" },
    { from: "bug", to: "dark", color: "green" },
    { from: "rock", to: "fire", color: "green" },
    { from: "rock", to: "ice", color: "green" },
    { from: "rock", to: "flying", color: "green" },
    { from: "rock", to: "bug", color: "green" },
    { from: "ghost", to: "psychic", color: "green" },
    { from: "ghost", to: "ghost", color: "green" },
    { from: "dragon", to: "dragon", color: "green" },
    { from: "dark", to: "psychic", color: "green" },
    { from: "dark", to: "ghost", color: "green" },
    { from: "steel", to: "ice", color: "green" },
    { from: "steel", to: "rock", color: "green" },
    { from: "steel", to: "fairy", color: "green" },
    { from: "fairy", to: "fighting", color: "green" },
    { from: "fairy", to: "dragon", color: "green" },
    { from: "fairy", to: "dark", color: "green" },
  ];

  notVeryEffectiveEdges = [
    { from: "normal", to: "rock", color: "red" },
    { from: "normal", to: "ground", color: "red" },
    { from: "fire", to: "fire", color: "red" },
    { from: "fire", to: "water", color: "red" },
    { from: "fire", to: "rock", color: "red" },
    { from: "fire", to: "dragon", color: "red" },
    { from: "water", to: "water", color: "red" },
    { from: "water", to: "grass", color: "red" },
    { from: "water", to: "dragon", color: "red" },
    { from: "electric", to: "electric", color: "red" },
    { from: "electric", to: "grass", color: "red" },
    { from: "electric", to: "dragon", color: "red" },
    { from: "grass", to: "fire", color: "red" },
    { from: "grass", to: "grass", color: "red" },
    { from: "grass", to: "poison", color: "red" },
    { from: "grass", to: "flying", color: "red" },
    { from: "grass", to: "bug", color: "red" },
    { from: "grass", to: "dragon", color: "red" },
    { from: "grass", to: "steel", color: "red" },
    { from: "ice", to: "fire", color: "red" },
    { from: "ice", to: "water", color: "red" },
    { from: "ice", to: "ice", color: "red" },
    { from: "ice", to: "steel", color: "red" },
    { from: "fighting", to: "poison", color: "red" },
    { from: "fighting", to: "flying", color: "red" },
    { from: "fighting", to: "psychic", color: "red" },
    { from: "fighting", to: "bug", color: "red" },
    { from: "fighting", to: "fairy", color: "red" },
    { from: "poison", to: "poison", color: "red" },
    { from: "poison", to: "ground", color: "red" },
    { from: "poison", to: "rock", color: "red" },
    { from: "poison", to: "ghost", color: "red" },
    { from: "ground", to: "grass", color: "red" },
    { from: "ground", to: "bug", color: "red" },
    { from: "flying", to: "electric", color: "red" },
    { from: "flying", to: "rock", color: "red" },
    { from: "flying", to: "steel", color: "red" },
    { from: "psychic", to: "psychic", color: "red" },
    { from: "psychic", to: "steel", color: "red" },
    { from: "bug", to: "fire", color: "red" },
    { from: "bug", to: "fighting", color: "red" },
    { from: "bug", to: "poison", color: "red" },
    { from: "bug", to: "flying", color: "red" },
    { from: "bug", to: "ghost", color: "red" },
    { from: "bug", to: "steel", color: "red" },
    { from: "bug", to: "fairy", color: "red" },
    { from: "rock", to: "fighting", color: "red" },
    { from: "rock", to: "ground", color: "red" },
    { from: "rock", to: "steel", color: "red" },
    { from: "ghost", to: "dark", color: "red" },
    { from: "dragon", to: "steel", color: "red" },
    { from: "dark", to: "fighting", color: "red" },
    { from: "dark", to: "dark", color: "red" },
    { from: "dark", to: "fairy", color: "red" },
    { from: "steel", to: "fire", color: "red" },
    { from: "steel", to: "water", color: "red" },
    { from: "steel", to: "electric", color: "red" },
    { from: "steel", to: "steel", color: "red" },
    { from: "fairy", to: "fire", color: "red" },
    { from: "fairy", to: "poison", color: "red" },
    { from: "fairy", to: "steel", color: "red" },
  ];

  noEffectEdges = [
    { from: "normal", to: "ghost", color: "grey" },
    { from: "electric", to: "ground", color: "grey" },
    { from: "fighting", to: "ghost", color: "grey" },
    { from: "poison", to: "steel", color: "grey" },
    { from: "ground", to: "flying", color: "grey" },
    { from: "psychic", to: "dark", color: "grey" },
    { from: "ghost", to: "normal", color: "grey" },
    { from: "dragon", to: "fairy", color: "grey" },
  ];

  edges = superEffectiveEdges.concat(
    notVeryEffectiveEdges.concat(noEffectEdges)
  );

  // create a network
  var container = document.getElementById("pokegraph");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    physics: false,
    interaction:{
      zoomView: false,
      dragNodes:false,
      dragView: false,
    },
    nodes: {
      shape: "circularImage",
      size: 30,
      font: { color: "#eeeeee" },
    },
    edges: {
      chosen: {
        edge: function (values, id, selected, hovering) {
          values.toArrow = true;
          values.width = 3;
        },
      },
      arrows: {
        to: {scaleFactor: 0.5}
      },
      arrowStrikethrough: false,
      width: 0,
    //   selectionWidth: 3, // doesn't work when using "chosen" options
    },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
