import data from "./data.json" assert {type: "json"};
import {setInner} from "https://jscroot.github.io/element/croot.js";

setInner("judul", data.judul);

// console.log(data.judulproposal)
//judul proposal
setInner("judulproposal",` 
<h1>${data.isi.judulproposal}</h1>`);

//latar belakang
setInner("latarbelakang", `
<h1>${data.isi.latarbelakang}</h1>
<p>${data.isi.latarbelakang1}</p>
<p>${data.isi.latarbelakang2}</p>
`);

//tujuan
setInner("tujuan", `
<h1>${data.isi.tujuan}</h1>
<p>${data.isi.tujuan1}</p>
`);

//alasan
let listalasan = data.isi.alasan1.map((item, blog) => {
    return `<li>${item}</li>`;
});

setInner("alasan", `
<h1>${data.isi.alasan}</h1>
<ul>${listalasan.join("")}</ul>
`);

//manfaat
let listmanfaat = data.isi.manfaat1.map((item, blog) => {
    return `<li>${item}</li>`;
});

setInner("manfaat", `
<h1>${data.isi.manfaat}</h1>
<ul>${listmanfaat.join("")}</ul>
`);

//kesimpulan
setInner("kesimpulan", `
<h1>${data.isi.kesimpulan}</h1>
<p>${data.isi.kesimpulan1}</p>
<p>${data.isi.kesimpulan2}</p>
<p>${data.isi.kesimpulan3}</p>
`);