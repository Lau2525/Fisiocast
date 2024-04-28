let navbarElement = document.getElementById('navbar');

if(navbarElement){
        let nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-lg'; 
        nav.innerHTML = `
          
        <div class="container-fluid">
            <a class="Contenedor-logo" href="./index.html"><img id="Logo" src="./src/Images/Logo.jpg" alt="Fisiocast" width="300"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul id="ul-nav" class="navbar-nav">
                            <li><a class="nav-link" href="#nosotros">Nosotros</a></li>
                            <li><a class="nav-link" href="#Main-container-imgs">Servicios</a></li>
                            <li><a class="nav-link" href="#testimonios">Testimonios</a></li>
                            <li><a class="nav-link" href="./contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
        `;

        // Insertar el header antes del elemento con id 'navbar'
        navbarElement.insertAdjacentElement('beforebegin', nav);

}//if navbarElement

