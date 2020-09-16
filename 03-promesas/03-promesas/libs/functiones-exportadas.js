const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

export {
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades,  
}

export const obtenerPcias = async () => {
    try {
        const consulta = await fetch('./databases/provincias.json');
        const pcias = await consulta.json();
        return pcias
    } catch (error) {
        throw Error('Error al cargar las provincias')
    }
}

export const obtenerDptos = async () => {
    try {  
    const consulta = await fetch('./databases/departamentos.json');
    const dptos = await consulta.json();
    return dptos
    } catch (error) {
        throw Error('Error al cargar los departamentos')
    }
}

export const obtenerLocalidades = async () => {
    try { 
    const consulta = await fetch('./databases/localidades.json');
    const localidades = await consulta.json();
    return localidades
    } catch (error) {
        throw Error ('Error al cargar las localidades')
    }
}

