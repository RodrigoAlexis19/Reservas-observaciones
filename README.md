# Reserva Observación App

## 🌱 Descripción de la problemática

La conservación de los espacios naturales y su biodiversidad requiere no solo proteger el territorio, sino también **observar y registrar activamente lo que ocurre en él**. Muchas veces, visitantes de reservas naturales —ya sean científicos, turistas o ciudadanos— realizan observaciones valiosas que **no quedan almacenadas ni sistematizadas**, perdiéndose así oportunidades de aprendizaje, monitoreo o promoción turística.

Personalmente, esta temática conecta con una etapa importante de mi vida: **en el pasado estudié una carrera ligada al turismo aventura**, y siempre me atrajo el ecoturismo como enfoque sustentable y educativo. Aunque actualmente estudio en el área de las tecnologías de la información, vi en este proyecto una oportunidad para **fusionar ambas pasiones**: el desarrollo de soluciones digitales y la valoración del patrimonio natural de Chile.  
Creo firmemente que el turismo en nuestro país necesita más herramientas de gestión y difusión, especialmente en áreas protegidas donde aún falta promoción y cuidado.

Desde la mirada técnica, planteo esta aplicación como una solución simple, funcional y completamente local para **registrar visitas y observaciones** en reservas, parques o santuarios naturales, sin necesidad de backend ni conexión a Internet.

---

## 💡 Solución propuesta

Se desarrolló una **SPA (Single Page Application)** construida con React y Vite, que permite a los usuarios:

- Registrar visitas a una reserva, incluyendo datos como:
  - Nombre y RUT del visitante
  - Fecha y hora de ingreso/salida
  - Reserva visitada (seleccionable)
  - Observaciones y especie observada
  - Cantidad de fotografías tomadas
- Guardar estos datos de forma **persistente usando `localStorage`**
- Consultar especies a través de una **API pública real (iNaturalist)** que entrega nombre común, científico e imagen
- Visualizar todas las visitas registradas y eliminarlas si es necesario

Todo esto está empaquetado en una aplicación simple, liviana y ejecutable completamente en entorno local.

---

## ⚙️ Instrucciones de uso

### 🔽 Requisitos
- Tener instalado [Node.js](https://nodejs.org) (versión recomendada 18+)

### ▶️ Pasos para ejecutar:

1. Clona este repositorio o descarga el proyecto como `.zip`
2. Abre la carpeta `reserva-observacion-app` en Visual Studio Code
3. En la terminal, ejecuta los siguientes comandos:

```bash
npm install
npm run dev

---

> ✍️ Desarrollado por Rodrigo Alexis Jara  
> Carrera: Analista Programador – INACAP San Pedro de la Paz  
> Año: 2025

