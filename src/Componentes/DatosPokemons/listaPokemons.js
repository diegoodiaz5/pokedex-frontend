import Bulbasaur from "../Materiales/bulbasaur.png";
import Charmander from "../Materiales/charmander.png";
import Squirtle from "../Materiales/squirtle.png";
import Butterfree from "../Materiales/butterfree.png";
import Pikachu from "../Materiales/pikachu.png";
import Gastly from "../Materiales/gastly.png";
import Ditto from "../Materiales/ditto.png";
import Mew from "../Materiales/mew.png";
import Aron from "../Materiales/aron.png";

const listaDePokemons =[
      { nombre: "Bulbasaur", numero: "001", imagen: `${Bulbasaur}`, claseCSS:"bulbasaur", 
        colorPrimario:"#74CB48", colorSecundario:"#A43E9E", peso:"6.9", altura:"0.7",
        tipo1:"Grass", tipo2:"Poison",
  
        movimiento1:"Chlorophyll", movimiento2:"Overgrow",
        descripcion:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        HP:"045", ATK:"049", DEF:"049", SATK:"065", SDEF:"065", SPD:"045"
      }, 
      { nombre: "Charmander", numero: "004", imagen: `${Charmander}`, claseCSS:"charmander", 
        colorPrimario:"#F57D31", colorSecundario:"", peso:"8.5", altura:"0.6",
        tipo1:"Fire", Tipo2:"",
  
        movimiento1:"Mega-Punch", movimiento2:"Fire-Punch",
        descripcion:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        HP:"039", ATK:"052", DEF:"043", SATK:"060", SDEF:"050", SPD:"065"
  },
  { nombre: "Squirtle", numero: "007", imagen: `${Squirtle}`, claseCSS:"squirtle", 
        colorPrimario:"#6493EB", colorSecundario:"", peso:"9.0", altura:"0.5",
        tipo1:"Water", Tipo2:"",
  
        movimiento1:"Torrent", movimiento2:"Rain-Dish",
        descripcion:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        HP:"044", ATK:"048", DEF:"065", SATK:"050", SDEF:"064", SPD:"043"
  },
  { nombre: "Butterfree", numero: "012", imagen: `${Butterfree}`, claseCSS:"butterfree", 
        colorPrimario:"#A7B723", colorSecundario:"#A891EC", peso:"32.0", altura:"1.1",
        tipo1:"Bug", tipo2:"Flying",
  
        movimiento1:"Compound-Eyes", movimiento2:"Tinted-Lens",
        descripcion:"In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        HP:"060", ATK:"045", DEF:"050", SATK:"090", SDEF:"080", SPD:"070"
  },
  { nombre: "Pikachu", numero: "025", imagen: `${Pikachu}`, claseCSS:"pikachu", 
        colorPrimario:"#F9CF30", colorSecundario:"", peso:"6.0", altura:"0.4",
        tipo1:"Electric", tipo2:"",
  
        movimiento1:"Mega-Punch", movimiento2:"Pay-Day",
        descripcion:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        HP:"035", ATK:"055", DEF:"040", SATK:"050", SDEF:"050", SPD:"090"
  },
  { nombre: "Gastly", numero: "092", imagen: `${Gastly}`, claseCSS:"gastly", 
        colorPrimario:"#70559B", colorSecundario:"#666666", peso:"0.1", altura:"1.3",
        tipo1:"Ghost", tipo2:"Type",
  
        movimiento1:"Levitate", movimiento2:"",
        descripcion:"Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
        HP:"030", ATK:"035", DEF:"030", SATK:"100", SDEF:"035", SPD:"080"
  },
  { nombre: "Ditto", numero: "132", imagen: `${Ditto}`, claseCSS:"ditto", 
        colorPrimario:"#AAA67F", colorSecundario:"", peso:"4.0", altura:"0.3",
        tipo1:"Normal", Tipo2:"",
  
        movimiento1:"Limber", movimiento2:"Imposter",
        descripcion:"It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
        HP:"048", ATK:"048", DEF:"048", SATK:"048", SDEF:"048", SPD:"048"
  },
  { nombre: "Mew", numero: "152", imagen: `${Mew}`, claseCSS:"mew", 
        colorPrimario:"#FB5584", colorSecundario:"", peso:"4.0", altura:"0.4",
        tipo1:"Psychic", Tipo2:"",
        movimiento1:"Synchronize", movimiento2:"",
        descripcion:"When viewed through a microscope this Pokémon's short, fine, delicate hair can be seen.",
        HP:"100", ATK:"100", DEF:"100", SATK:"100", SDEF:"100", SPD:"100"
  },
  { nombre: "Aron", numero: "304", imagen: `${Aron}`, claseCSS:"aron", 
        colorPrimario:"#B7B9D0", colorSecundario:"#B69E31", peso:"60.0", altura:"0.4",
        tipo1:"Steel", tipo2:"Rock",
        movimiento1:"Sturdy", movimiento2:"Rock-Head",
        descripcion:"It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
        HP:"050", ATK:"070", DEF:"100", SATK:"040", SDEF:"040", SPD:"030"
  }
  ]

export default listaDePokemons;