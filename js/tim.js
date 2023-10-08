import data from "./data.json";
import { setInner } from "https://jscroot.github.io/element/croot.js";

const { tim } = data; // Destructuring untuk mengakses objek 'tim' dari data JSON

const timMHS1 = `
  <h1>${tim.nama[0]}</h1>
  <p>${tim.npm[0]}</p>S
  <p>${tim.email[0]}</p>
`;

const timMHS2 = `
  <h1>${tim.nama[1]}</h1>
  <p>${tim.npm[1]}</p>S
  <p>${tim.email[1]}</p>
`;
const combinedTimHTML = timMHS1 + timMHS2; // Gabungkan kedua konten dalam satu variabel

setInner("tim", combinedTimHTML);