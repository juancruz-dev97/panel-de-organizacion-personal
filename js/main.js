/*
// Seleccionamos elementos del DOM
const formTarea = document.querySelector(".task-form");
const inputTarea = document.querySelector(".input");
const listaTareas = document.getElementById("listaTareas");

// Al cargar la página mostramos las tareas guardadas
document.addEventListener("DOMContentLoaded", mostrarTareas);

// Capturamos el submit del formulario
formTarea.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recargar la página
  const texto = inputTarea.value.trim();
  if (texto !== "") {
    guardarTarea(texto);
    inputTarea.value = ""; // limpiar el input
    mostrarTareas();       // refrescar la lista
  }
});

// Guardar tarea en localStorage
function guardarTarea(texto) {
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  // cada tarea será un objeto con texto y estado de completado
  tareas.push({ texto: texto, completada: false });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Mostrar tareas en pantalla
function mostrarTareas() {
  listaTareas.innerHTML = ""; // limpiar lista
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada; // mantener estado guardado

    const span = document.createElement("span");
    span.textContent = tarea.texto;
    if (tarea.completada) {
      span.style.textDecoration = "line-through";
    }

    // Evento: tachar texto y guardar estado cuando se marca el checkbox
    checkbox.addEventListener("change", () => {
      tareas[index].completada = checkbox.checked;
      localStorage.setItem("tareas", JSON.stringify(tareas));
      if (checkbox.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTareas.appendChild(li);
  });
}
  */