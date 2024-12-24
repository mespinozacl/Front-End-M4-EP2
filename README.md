# Front-End-M4-EP2
npm create vite@latest m4ep2 -- --template react
cd m4ep2
npm install
npm run dev

Explicación del DOM Virtual
React utiliza el <b>DOM Virtual</b> para mejorar el rendimiento.
En lugar de actualizar el DOM real directamente, React crea una copia en memoria y solo actualiza las partes que han cambiado.
Esto minimiza las manipulaciones directas del DOM, haciendo que las actualizaciones sean más rápidas y eficientes.

Una sola vista para mostrar las funcionalidades pedidas

¿Qué no hice?
Implementar salidas estructuradas para el profiler.
(y evidentemente el CSS)