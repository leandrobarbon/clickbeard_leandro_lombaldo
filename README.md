<p align="center">
  <img src="https://github.com/leandrobarbon/clickbeard_leandro_lombaldo/blob/main/public/assets/BARBER%20SHOP.png"/>
</p>

#
<img src="https://github.com/leandrobarbon/clickbeard_leandro_lombaldo/blob/main/public/assets/barbershop-raiz.png" />
<img src="https://github.com/leandrobarbon/clickbeard_leandro_lombaldo/blob/main/public/assets/barbershop-home.png" />
<img src="https://github.com/leandrobarbon/clickbeard_leandro_lombaldo/blob/main/public/assets/barbershop-admin.png" />


### Figma

 - https://www.figma.com/file/7QvfA5UYoPJI9cIoMB694H/Untitled?node-id=0%3A1

## Tecnologias

Este projeto foi desenvolvido utilizando tecnologias front-end.


- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Styled-components](https://styled-components.com/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)



## 💻 Getting started

### Requirements

- Você preisa ter instalado o [Node.js](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/) ou [Npm](https://docs.npmjs.com/cli/v6/commands/npm-install) e [Docker](https://www.docker.com/) para rodar este projeto.

**Clone o projeto e acesse o arquivo**


**Siga os passos abaixo**

```bash
# Install as dependencias
$ yarn

# Com docker executado e inicializado, rode o comando abaixo para rodar um container docker com um imagem postgres dentro dele.
$ docker run --name postgres-container -p 5432:5432 -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -d postgres

# Após o container tiver rodando, abra terminal no root do projeto, rodar comando, isso vai configurar prisma dentro do projeto.
$ yarn prisma generate

# para gerar migration, da tabela no banco.
$ yarn prisma migrate --name CREATE_USER

# Run the web server
$ yarn dev
```

O app vai estar disponivel para acesso no seu broser na `http://localhost:3000`

### Observações

- Registro 'ADMIN', basta cadastrar e utilizar o email unico 'admin@admin', assim ele vai reconhecer na validação, e acessar o local correto.


### upgrade futuro

- Cadastro barbeiro
- Agendamento Cliente


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
