// let nombres = ["Mauricio","Fabiana","Diego","Daniel"];

// // let nombre1= nombres[0];
// // let nombre2= nombres[1];
// // let nombre3= nombres[2];
// // let nombre4= nombres[3];
// let [nombre1,nombre2,nombre3,nombre4] = nombres;

// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);

// let [primero,,,ultimo]=nombres;

// console.log(primero);
// console.log(ultimo);

// let [primerob,...otros] =nombres;

// console.log(otros)

// function estudiantes() {
//     return ["Braulio","Melania","Alvaro"]
// } 

// let [name1,name2,name3] = estudiantes();

// console.log(name1);
// console.log(name2);
// console.log(name3);

let estudianteReact = {
    nombre:"Carlos",
    apellido:"Perez",
    cursos:["HTML","JS","React"]
}

// let nombreObjeto=estudianteReact.nombre;

let {apellido:surname,nombre:names} = estudianteReact;

console.log(names);
console.log(surname);
// console.log(cursos);

let props = {
    nombre:"Juan",
    edad:25
}

let {nombre,edad}=props