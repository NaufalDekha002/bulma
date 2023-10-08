import data from "./data.json" assert {type: "json"};
import {setInner} from "https://jscroot.github.io/element/croot.js";

setInner("tim", `
<h1>${data.tim.nama}</h1>
<p>${data.tim.npm}</p>
<p>${data.tim.email}</p>
`); 

setInner("tim", `
<h1>${data.tim.nama}</h1>
<p>${data.tim.npm}</p>
<p>${data.tim.email}</p>
`); 