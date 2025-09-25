# 📱 Laboratorio N°06 – Proyecto TodoAppPro

Este proyecto consiste en el desarrollo de una aplicación móvil de lista de tareas (To-Do List) utilizando **React Native con Expo**. La app permite agregar, completar, eliminar y filtrar tareas, además de guardar los datos localmente usando `AsyncStorage`. También incluye validaciones, mensajes dinámicos y un temporizador que elimina tareas completadas automáticamente.

---

## 🧩 Estructura del proyecto

La aplicación está organizada en componentes reutilizables para mantener el código limpio y modular. A continuación se muestra la estructura general del proyecto:

<img width="368" height="449" alt="image" src="https://github.com/user-attachments/assets/e2ae36e5-799a-44d4-bc1d-56a5564890df" />

## 📂 Archivos del proyecto

### 🔹 `App.js`

Archivo principal que gestiona el estado global, la lógica de tareas, filtros, persistencia y renderiza los componentes.

<img width="710" height="638" alt="image" src="https://github.com/user-attachments/assets/1547c673-41e7-4c41-b264-f8e83d50dde6" />

<img width="746" height="676" alt="image" src="https://github.com/user-attachments/assets/ee5ea2e0-f573-4d32-9d8f-da642dd60291" />


---

### 🔹 `components/TaskItem.js`

Componente que muestra cada tarea individual, con su texto, fecha de creación y estilos según si está completada.

<img width="914" height="423" alt="image" src="https://github.com/user-attachments/assets/a3da7235-97a1-49f8-be29-36b23eac63ec" />


---

### 🔹 `components/TaskInput.js`

Componente que contiene el campo de texto y el botón para agregar nuevas tareas. Incluye validaciones.

<img width="722" height="485" alt="image" src="https://github.com/user-attachments/assets/db46513e-c7ed-4fbe-9c3d-d8d89516d306" />


---

### 🔹 `components/TaskFilter.js`

Componente que muestra los botones para filtrar las tareas (todas, pendientes, completadas).

<img width="880" height="403" alt="image" src="https://github.com/user-attachments/assets/2a3c91bb-8032-4995-b65f-2d8e58003597" />


---

### 🔹 `components/TaskMessage.js`

Componente que muestra un mensaje dinámico según la cantidad de tareas pendientes.

<img width="856" height="497" alt="image" src="https://github.com/user-attachments/assets/95b10af4-7d05-43c0-9354-da0602118e3d" />


---

## 🚀 Ejecución de la aplicación

A continuación se muestra el paso a paso de cómo se ejecuta la aplicación y cómo funciona cada parte:

### 1️⃣ Inicio de la app

<img width="403" height="1005" alt="image" src="https://github.com/user-attachments/assets/6ea28217-64b3-496b-8078-d4ad6dd35b76" />


---

### 2️⃣ Agregar una tarea

<img width="399" height="503" alt="image" src="https://github.com/user-attachments/assets/6fc8a286-e2cd-40f4-a638-accf9b0b39a7" />


---

### 3️⃣ Marcar como completada

<img width="405" height="557" alt="image" src="https://github.com/user-attachments/assets/eab2e63c-b28c-404f-805c-1fdfa6b07be1" />

---

### 4️⃣ Eliminar tarea (presionar largo)

<img width="406" height="1018" alt="image" src="https://github.com/user-attachments/assets/26ab8d7f-ee4d-4d16-a951-aaa56c5cf45a" />
<img width="406" height="1005" alt="image" src="https://github.com/user-attachments/assets/a87a7471-bb74-4262-af92-73988fcc4266" />



---

### 5️⃣ Filtro de tareas

<img width="398" height="628" alt="image" src="https://github.com/user-attachments/assets/73483868-f889-4c40-a524-9ba44d846095" />

<img width="403" height="529" alt="image" src="https://github.com/user-attachments/assets/8e4c4bbe-9525-4c33-b4d3-18944b33fc9a" />

<img width="402" height="443" alt="image" src="https://github.com/user-attachments/assets/7e1ec026-8068-4223-ae56-6f93cc9f1dfb" />



---

### 6️⃣ Mensaje dinámico

<img width="317" height="438" alt="image" src="https://github.com/user-attachments/assets/ca776d9e-384f-477b-8407-7d5a7898c2d8" />

<img width="366" height="640" alt="image" src="https://github.com/user-attachments/assets/b5acbfc0-84b7-4860-8785-2e7a54dc9f31" />

<img width="382" height="810" alt="image" src="https://github.com/user-attachments/assets/6db76cb1-546c-41f9-8c69-47257002cf37" />


---

