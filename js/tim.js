import data from "./data.json" assert {type: "json"};
import {setInner} from "https://jscroot.github.io/element/croot.js";

setInner("judul", data.judul);

setInner("tim1", `
<strong>${data.tim[0].nama}</strong>
<br>${data.tim[0].npm}
<br>${data.tim[0].email}
`);

setInner("tim2", `
<strong>${data.tim[1].nama}</strong>
<br>${data.tim[1].npm}
<br>${data.tim[1].email}
`);
