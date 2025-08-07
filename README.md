# 🎁 Amigo Secreto

Este es un proyecto en JavaScript y HTML que permite agregar una lista de amigos y realizar un sorteo para elegir a tu **amigo secreto** de manera aleatoria.  
La aplicación evita nombres repetidos y controla que haya un mínimo de 2 participantes antes de iniciar el sorteo.

## 🚀 Características

- Agregar nombres a la lista de participantes.
- Evita agregar nombres duplicados.
- Muestra la lista de amigos añadidos.
- Realiza el sorteo seleccionando un amigo aleatorio.
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
    └── assets/ # Imágenes

## 🖼️ Vista previa

![Captura del proyecto](assets/amigo-secreto.png)

## 📋 Uso

1. Escribe un nombre en el campo de texto y pulsa **"Añadir"**. (Puedes añadir los que quieras)
2. Repite el proceso para todos los participantes.
3. Pulsa el botón **"Sortear amigo"** para obtener un amigo secreto al azar.
4. El resultado se mostrará debajo de la lista.

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/amigo-secreto.git

# Entrar en la carpeta del proyecto
cd amigo-secreto

# Abrir en el navegador
start index.html   # En Windows

