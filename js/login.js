document.addEventListener('DOMContentLoaded', async () => {
    //levanto del formulario del login email y password
    FormloginUser = document.getElementById('FormloginUser');
    FormloginUser.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(FormloginUser);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email === '' || password === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        const options = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        const response = await fetch('https://es.demeq.com/cac/back/login.php', options);
        const data = await response.json();
        if (response.status === 200) {
            alert('Usuario logueado correctamente');
            FormloginUser.reset();
            //REDIRECCIONAR A LA PAGINA DE ADMINISTRADOR.HTML
            location.href = '../pages/administrador.html';

           
        } else {
            alert('Error al loguear usuario');
        }
    });
});