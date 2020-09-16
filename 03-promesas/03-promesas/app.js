import {obtenerPcias,obtenerDptos,obtenerLocalidades} from './03-promesas/libs/functiones-exportadas.js'

const consultarDatos = async ()=> {
    try {
        const provincias = await obtenerPcias();
        const departamentos = await obtenerDptos();
        const localidades = await obtenerLocalidades();
        console.log (provincias);
        console.log (departamentos);
        console.log (localidades);
    
    } catch (Error) {
        console.error (Error)
    }
}

consultarDatos();
