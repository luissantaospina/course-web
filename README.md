# CourseWeb
Esta aplicación está construida con angular y tailwind.

Funcionalmente se puede crear, editar, eliminar y consultar cursos.

## Requisitos previos

### Programas
1. [x] Node https://nodejs.org/es/
2. [x] GIT https://git-scm.com/

### Versiones
1. [x] Node v14.20.1npm
2. [x] Npm v6.14.17
3. [x] Angular v14.2.12
4. [x] Angular cli v14.2.10

## Instalación
1. [x] Descargar el repositorio de https://github.com/luissantaospina/course-web con el comando `git clone https://github.com/luissantaospina/course-web`
2. [x] Moverse a la carpeta del proyecto `cd course-web`
3. [x] Instalar dependencias `npm install`
4. [x] Configurar la url base donde esta corriendo el backend para permitir la comunicación entre ambos, esto se realiza en el archivo `src/environments/environment.ts` y se cambia la variable `baseUrl` colocando la url del backend. Solo debe cambiar o reemplazar `http://127.0.0.1:8000`


## Inicio
1. [x] Iniciar aplicación `ng serve`
2. [x] Generalmente se despliega en http://localhost:4200/ (verificar puesto que esto puede cambiar)


## Vista previa
![list.png](src%2Fassets%2Flist.png)
![create.png](src%2Fassets%2Fcreate.png)
![delete.png](src%2Fassets%2Fdelete.png)
