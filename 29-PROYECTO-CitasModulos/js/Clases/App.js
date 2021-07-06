

// ? Importamos los selectores que nos hacen falta.
import { mascotaInput, 
    propietarioInput, 
    telefonoInput,
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario 
} from '../selectores.js'

// ? Importamos las funciones que nos hacen falta.
import { datosCita, nuevaCita } from '../funciones.js';

class App {
    constructor(){
        this.initApp();
    }

    initApp(){
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        // Formulario para nuevas citas.
        formulario.addEventListener('submit', nuevaCita);
    }
}

export default App;