Para construir la imagen de Docker, ejecute el siguiente comando:
docker build . -t jleonro/architecture2022

Para ejecutar la imagen de Docker, ejecute el siguiente comando:
docker run -p 4000:4000 --name buscador_cursos jleonro/architecture2022 
