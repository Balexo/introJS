let listadoCanciones=[]

function crearCatalogo(){
    

    const agregarCancion=() => {
        let nombreCancion=""
        let genero=""
        let duracion=0

       
        nombreCancion=prompt("Introduce el nombre de la canción")
        genero=prompt("Introduce el género de la canción")
        duracion= parseInt(prompt("Introduce la duración de la canción en minutos"))
        while(isNaN(duracion) || duracion<=0){
            duracion=parseInt(prompt("Introduce la duración de la canción en minutos"))
        }

        const cancion={
        nombreCancion: nombreCancion,
        genero: genero,
        duracion: duracion}

        listadoCanciones.push(cancion)
        
        return listadoCanciones
    }
    
    const listarCanciones=() =>{
        if(listadoCanciones.length===0){
            console.log("No hay canciones")
        }else{
            for(let {nombreCancion, genero, duracion} of listadoCanciones){
            console.log(`El nombre de la canción es "${nombreCancion}" del género ${genero} y duración ${duracion} minutos`)
        }
       }
    }
    const buscarPorGenero=(listadoCanciones)=>{
        if(listadoCanciones.length===0){
            console.log("No hay canciones")
        }else{
            const generoSelecionado=prompt("Introduce un género para seleccionar todas las canciones de este")
            const generoCancion=listadoCanciones.filter((cancion) =>cancion.genero===generoSelecionado).map(elemento =>elemento.nombreCancion)
            
            const generoCancionesSel={generoSelecionado: generoSelecionado, generoCancion: generoCancion} // Se devuelve en un objecto el genero selecionado y el género de la canción introducido por usuario

            console.log(`Las canciones por género ${generoCancionesSel.generoSelecionado} son : ${generoCancionesSel.generoCancion}`)
        }         
    }      
       
    const calcularPromedioDuracion=(listadoCanciones)=>{
        if(listadoCanciones.length===0){
            console.log("No hay canciones")
        }else{
        const promedioDuracionCanciones= listadoCanciones.reduce((accum, cancion)=>accum+cancion.duracion/listadoCanciones.length,0)
        console.log(`La duración media de las canciones es: ${promedioDuracionCanciones} minutos`)
        }
    }

    return {
    agregarCancion: agregarCancion,
    listarCanciones: listarCanciones,
    buscarPorGenero: buscarPorGenero,
    calcularPromedioDuracion: calcularPromedioDuracion
    };
}

let miCatalogo = crearCatalogo();
/*const listadoCanciones= [
{nombreCancion: 'que bien', genero: 'indie', duracion: 3},
{nombreCancion: 'el bien', genero: 'pop', duracion: 12},
{nombreCancion: 'indestructibles', genero: 'indie', duracion: 5},
{nombreCancion: 'de las dudas infinitas', genero: 'pop', duracion: 6}
]*/
miCatalogo.listarCanciones(listadoCanciones)
miCatalogo.buscarPorGenero(listadoCanciones)
miCatalogo.calcularPromedioDuracion(listadoCanciones)
miCatalogo.agregarCancion()//Añades tantas veces la función agregarCancion como canciones quieres que introduzca el usuario
miCatalogo.agregarCancion()
miCatalogo.listarCanciones(listadoCanciones)
miCatalogo.buscarPorGenero(listadoCanciones)
miCatalogo.calcularPromedioDuracion(listadoCanciones)




