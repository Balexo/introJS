// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    return new Promise((reject, resolve) => { 
    let usuario;
    setTimeout(() => {
    if (id === 1) {
     resolve (usuario = { id: 1, nombre: 'John Doe' });
    }else{
        reject("Usuario no encontrado")
    }
    }, 2000);
    return usuario;
})
}


const main = async () => {
    try{
        const usuario = await obtenerUsuario(1)
        console.log(usuario)
    }catch (error){
        console.log(error)
    }
}

main() 
