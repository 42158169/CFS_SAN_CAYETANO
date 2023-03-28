import *as rls from "readline-sync";
let llegoelcolectivo : string =
rls.question("¿esta viniendo el colectivo?") 
//Asumamos que el usario solo puede inglesar "S" para si o "N" para no.
while(llegoelcolectivo == "N") {
    console.log("sigo esperando el colectivo");
llegoelcolectivo = rls.question("¿ya vino el colectivo?")
    
} console.log("llego el colectivo");



