## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

## Framework CSS

### Documentação Tailwindcss
https://tailwindcss.com/docs/installation

### Documentação PrimeReact
https://www.primefaces.org/primereact/setup/


## Configuração do Prisma

### Passos para configuração e execução:
1. Configure o ```DATABASE_URL``` no arquivo ```.env``` para apontar para seu banco de dados existente. Se seu banco de dados ainda não possui tabelas, leia https://pris.ly/d/getting-started
2. Defina o provedor do bloco datasource em schema.prisma para corresponder ao seu banco de dados: ```postgresql```, ```mysql```, ```sqlite```, ```sqlserver```, ```mongodb``` ou ```cockroachdb```.
3. Execute ```npx prisma db pull``` para transformar seu esquema de banco de dados em um esquema Prisma.
4. Execute ```npx prisma generate``` para gerar o Prisma Client. Você pode então começar a consultar seu banco de dados.

Mais informações na documentação:
https://pris.ly/d/getting-started