import data from "./data.json" assert {type: "json"};
import {setInner} from "https://jscroot.github.io/element/croot.js";

setInner("judul", data.judul);

setInner("deskripsi", data.deskripsi);

setInner("button", data.button);