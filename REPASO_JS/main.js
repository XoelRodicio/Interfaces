<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tareas</title>
</head>
<body>

    <!-- 1. Lista de tareas en HTML con su ID correspondiente -->
    <ul id="lista-tareas"></ul>

    <!-- 2. Código JavaScript para crear el array y rellenar la lista -->
    <script>
        // Crear el array de tareas
        const tareas = ["Comprar leche", "Estudiar JavaScript", "Ir al gimnasio", "Llamar al médico"];

        // Seleccionar el elemento HTML usando el ID correcto
        const listaHTML = document.getElementById("lista-tareas");

        // Recorrer el array y añadir cada tarea como un <li>
        tareas.forEach(tarea => {
            const elementoLi = document.createElement("li"); 
            elementoLi.textContent = tarea;                 
            listaHTML.appendChild(elementoLi);              
        });
    </script>

</body>
</html>
