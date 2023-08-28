import { cyclotron } from "./cyclotron";

const electron = cyclotron("e", 4);
const proton = cyclotron("p", 4);
const neutron = cyclotron("n", 4);
const error = cyclotron("x", 3);

console.log("electron: ", electron);
console.log("proton: ", proton);
console.log("neutron: ", neutron);
console.log("error: ", error);
