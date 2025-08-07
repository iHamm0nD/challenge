# 🎁 Amigo Secreto

Este es un proyecto simple en JavaScript, HTML y CSS que permite agregar una lista de amigos y realizar un sorteo para elegir a tu **amigo secreto** de manera aleatoria.  
La aplicación evita nombres repetidos y controla que haya un mínimo de participantes antes de iniciar el sorteo.

## 🚀 Características

- Agregar nombres a la lista de participantes.
- Evitar agregar nombres duplicados.
- Mostrar la lista de amigos añadidos.
- Realizar el sorteo seleccionando un amigo aleatorio.
- Evitar repetir amigos sorteados hasta que todos hayan sido elegidos.
- Mensajes de alerta cuando:
  - No hay amigos ingresados.
  - Hay menos de 2 amigos para sortear.
  - Se intenta agregar un nombre vacío o repetido.
  - Ya se han sorteado todos los nombres.

## 📂 Estructura del Proyecto
    
    📦 amigo-secreto
    ├── index.html # Página principal
    ├── style.css # Estilos del proyecto
    ├── app.js # Lógica en JavaScript
    └── assets/ # Imágenes y recursos

## 🖼️ Vista previa

![Captura del proyecto](assets/amigo-secreto.png)

## 📋 Uso

1. Escribe un nombre en el campo de texto y pulsa **"Añadir"**.
2. Repite el proceso para todos los participantes.
3. Pulsa el botón **"Sortear amigo"** para obtener un amigo secreto al azar.
4. El resultado se mostrará debajo de la lista.

## 💻 Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## 📜 Instalación y ejecución

No se requiere instalación.  
Solo clona el repositorio y abre el archivo `index.html` en tu navegador.

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/amigo-secreto.git

# Entrar en la carpeta del proyecto
cd amigo-secreto

# Abrir en el navegador
start index.html   # En Windows

