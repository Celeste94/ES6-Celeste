//Desarollo
const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

const obtenerPcias = async () => {
    await retrasar(1800);
    try {
        const consulta = await fetch ('./databases/provincias.json');
        const Pcias = await consulta.json();
        return Pcias;
       
    } catch (error) {
        throw Error ('Error al cargar las provincias')
        
    }
    
}
const obtenerDptos = async () => {
    await retrasar(1391);
    try { 
       const consulta = await fetch('./databases/departamentos.json');
       const Dptos = await consulta.json();
       return Pcias;
    } catch (error) {
        throw Error ('Error al cargar los departamentos')
    }
}
const obtenerLocalidades = async () => {
    await retrasar(900);
    try { 
       const consulta = await fetch('./databases/localidades.json');
       const Localidades = await consulta.json();
       return Pcias;
    } catch (error) {
        throw Error ('Error al cargar las localidades')
    }
}

