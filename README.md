### Abrir o DB

`http://localhost/phpmyadmin/`

### Instalar pacotes do package.json

Em máquina externa utilize `cmd` antes 

`npm i` ou `npm install`

### Rodar o projeto em modo de desenvolvimento

`npm dev` ou `npm run dev` (Note que esse "dev" existe no package.json na parte de scripts)

### Reiniciar o projeto em modo de desenvolvimento

`rs`

### Sincronizar o projeto com o github

Isso é para baixar o projeto caso alguém além de você tenha atualizado ele, feito algum
commit novo...

`git pull`

### Subir um novo commit

```
git add .
git commit -m "Alterei X Coisa"
git push
```

### Para clonar o projeto no seu PC

```
git clone https://github.com/Resfriado/osf.git Osf
```

### Regras do front-end

Proibido aplicar estilizações em `html` ou `body`
Deve-se criar um `div` geral para aplicar estilizações

### Estilizar com o bootstrap

Deve-se substituir `*` por um número para aplicar a estilização

- `text-light` Texto claro
- `text-dark` Texto escuro
- `text-muted` Texto cinza
- `text-center` Centraliza o texto

- `bg-dark` Escuro
- `bg-light` Claro
- `bg-primary` Azul
- `bg-success` Verde
- `bg-danger` Vermelho

- `w-*` Width
- `h-*` Height

Pode-se substituir `m` por `p` para aplicar padding e substituir `*`
por `auto` para centralizar o elemento 

- `mt-*` Margin-Top
- `mb-*` Margin-Bottom
- `mx-*` Margin-Left + Margin-Right
- `my-*` Margin-Top + Margin-Bottom

Precisa ser utilizado com `d-flex` ou `d-grid`

- `gap-*` Espaçamento entre elementos

### Bibliotecas

- `livereload`
- `sweetalert2`
- `jcalendar.js`
```
https://www.calendar-js.com/demos/basic/calendar
npm install jcalendar.js
```