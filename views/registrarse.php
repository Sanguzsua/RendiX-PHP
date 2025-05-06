<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrarse</title><!--titulo que aparece en la pestaña del navegador-->
    <link rel="stylesheet" href="CSS/Style inicio.css"><!--enlace para el estilo de la pagina--> 
</head>

<body>
    
    <div class="container"><!--contenedor principal donde se incluye un boton y el titulo-->
        <h1>Registrarse</h1><!--titulo dentro del contenedor-->
        <form onsubmit="return iniciarSesion(event)">
            <label for="name">Nombre:</label> <!--Aqui vemos cada una de las secciones del formulario para registrarse-->
            <input type="text" id="name" name="name" required><br>
            
            <label for="lastname">Apellido:</label>
            <input type="text" id="lastname" name="lastname" required><br>

            <label for="age">Fecha de nacimiento:</label><!--Aqui utilizamos un id birth el cual nos auda a crear un calendario donde el usuario podra selccionar su fecha de nacimiento-->
            <input type="date" id="birth" name="birth" required><br>

            <label for="age">Correo electrónico:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="password">Contraseña:</label><!--Aqui Utilizamos un id password el cual va a crear en el formulario la opcion de ocultar o ver la contraseña-->
            <input type="password" id="password" name="password" required><br>

            <label for="password">Confirme la Contraseña:</label>
            <input type="password" id="confirm_password" name="confirm_password" required><br>

            
            <button onclick="iniciarSesion()">Registrarse</button><!--botón para enviar el formulario-->
        </form>
    </div>
    <img src="imagenes/rendix logo.png" alt="rendix"><!--imagen del logo-->
<footer id="contacto"><!--pie de página con información de contacto-->
    <p>Contacto:rendix@hotmail.com</p><!--informacio de contacto "correo electrónico"-->
    <p>Redes sociales: 
        <a href="https://www.linkedin.com/feed/" class="social-link">
            <img src="imagenes/linkedin.png" alt="LinkedIn" class="social-icon"> 
        </a>  
        <a href="https://github.com/Carlos3540" class="social-link">
            <img src="imagenes/github.png" alt="GitHub" class="social-icon">
        </a>  
        </p>

</footer>
<script src="iniciarsesion.js"></script>
</body>
</html>
