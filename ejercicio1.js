const usuario = {
    nombre : "Oscar",
    apellidos: "Vallejo Paredes",
    temas_bootcamps: [
        {tema:"Desarrollo Backend con Node.js", fecha_inicio: "2024-02-12"},
        {tema: "Git", fecha_inicio: "2023-11-28"},
        {tema: "Fundamentos de react", fecha_inicio: "2024-04-15"}
    ],
    busqueda_activa_empleo: true
}

console.log(usuario.temas_bootcamps[2].fecha_inicio)