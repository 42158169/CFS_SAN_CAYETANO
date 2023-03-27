import *as rls from "readline-sync"
let vuelta1 :number = rls.questionInt ("ingrese el tiempo de la vuelta 1: ");
let vuelta2 :number = rls.questionInt ("ingrese el tiempo de la vuelta 2: ");
let vuelta3 :number = rls.questionInt ("ingrese el tiempo de la vuelta 3: ");
let vuelta4 :number = rls.questionInt ("ingrese el tiempo de la vuelta 4: ");
let tiempoTotal :number = vuelta1 + vuelta2 + vuelta3 + vuelta4 ;
let promedioVuelta :number = tiempoTotal / 4;
console.log("su tiempo total es de : ",tiempoTotal);
console.log("su promedio de vuelta :", promedioVuelta);



 