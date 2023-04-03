var nombre ="Richi"
var apellido ="Derfla"

console.log(nombre+" "+ apellido);
var invertido =invertirString(nombre+apellido)
console.log(invertido);
function invertirString(value){
    return value.split("").reverse().join("");
}

