# Multi Agendamento

Sistema de agendamento de serviços

### Neste projeto você encontrará:

- [Nodejs](https://nodejs.org/en)
- [fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://www.npmjs.com/package/tsx)
- [zod](https://zod.dev/)

## Iniciar projeto

```CMD
yarn dev
```

```CMD
docker compose up -d
```

## Realizar teste das rotas

OBS: é necessário ter a extensão `https://httpie.io/` instalado, para consegui testar da forma do exemplo abaixo:

```CMD
http POST :3333/api/users name="tiago" login="lironnick@gmail.com" password="1234567"
```

## docker

image bitnami bom para producao

Subir:

```CMD
docker compose up -d
```

Apagar:

```CMD
docker compose down
```

Deletar imagens não usadas

```CMD
docker image prune
```

entra em um container:

```CMD
docker container exec -it mysql1 bash
```

entrar no mysql pela imagem do docker root é o usuario

```CMD
mysql -u root -p
```

listar tabelas

```CMD
show databases
```
