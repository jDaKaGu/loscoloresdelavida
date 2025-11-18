Instrucciones básicas para desplegar el sitio (Netlify o GitHub Pages)

Archivos incluidos:
- index.html
- proyectos.html
- transparencia.html
- sobre.html
- voluntarios.html
- contacto.html
- accessibility.html
- styles.css
- scripts.js

Dominio contratado: loscoloresdelavida.org

1) Opción Netlify (recomendada):
- Crea una cuenta en netlify.com
- Crea un nuevo sitio -> Deploy manually -> Drag & drop the folder 'los_colores_site' or connect to GitHub
- Una vez desplegado, en Netlify -> Domain management -> Add custom domain -> escribe tu dominio (loscoloresdelavida.org)
- Netlify te mostrará instrucciones DNS. Para Namecheap lo más sencillo es usar los nameservers de Netlify DNS o agregar un CNAME para www apuntando a tusite.netlify.app
- Guarda y espera propagación (puede tardar minutos u horas)
- Después vuelve a Netlify y verifica dominio y activa HTTPS (Let's Encrypt lo hará gratis).

2) Opción GitHub Pages:
- Crea repo público y sube los archivos.
- En Settings -> Pages, selecciona la rama main y carpeta / (root).
- Configura tu dominio personalizado siguiendo la guía de GitHub Pages (registros A y CNAME en Namecheap).

Reemplaza los enlaces de Google Drive y Formspree por tus identificadores reales antes de publicar.
