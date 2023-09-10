document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        cc:'',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    inputEmail.addEventListener('input',validar);
    inputCC.addEventListener('input',validar);
    inputAsunto.addEventListener('input',validar);
    inputMensaje.addEventListener('input',validar);
    formulario.addEventListener('submit', enviarEmail);

   
    btnReset.addEventListener('click',function(e){
        e.preventDefault();
        resetFormulario();

    })

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center',
            'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente.';
            formulario.appendChild(alertaExito);

            setTimeout(()=>{
                alertaExito.remove();
            },3000)

        },3000)

    }


    function validar(e){
        
        console.log(e.target.id);
        console.log(e.target.value);
        if(e.target.id !== 'cc' && e.target.value.trim() === ''){
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        // Validar email.
        if(e.target.id === 'cc' && e.target.value !== '' && !validarEmail(e.target.value) ||
           e.target.id === 'email' && !validarEmail(e.target.value)){

            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            if(e.target.id === 'cc' && e.target.value === ''){
                limpiarAlerta(e.target.parentElement);
            }
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email.
        comprobarEmail();
        

    }

    function mostrarAlerta(mensaje='Ocurrio un error', referencia){

        // Comprueba si ya existe una alerta y la elimina.
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2');

        // Inyecctar el error al formulario.
        // !! Pero borrará todo lo demás, pero si se puede.
        // formulario.innerHTML = error.innerHTML;

        // Lo correcto es: 
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        // Comprueba si ya existe una alerta.
        const alerta = referencia.querySelector('.bg-red-600');
        alerta ? alerta.remove() :'';

    }


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        console.log(email);
        // if(Object.values(email).includes('')){
        if(email.email === '' || email.asunto === '' || email.mensaje === ''){
            
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario(){
           // Reiniciar el objeto.
        // Buscamos el formulario ejecutamos está función que existe en formularios
        email.email='';
        email.cc='';
        email.asunto='';
        email.mensaje='';
        formulario.reset();
        comprobarEmail();
    }

});