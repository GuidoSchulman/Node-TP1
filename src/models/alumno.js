export default class Alumno{
    constructor(username, dni){
        this.username=username;
        this.dni=dni;
    }


getUsername(){
    return this.username;
}
getDNI(){
    return this.DNI;
}
toString(){
    return `username: ${this.username}, dni: ${this.dni}`;
}
}


