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
3. Antes de executar o comando abaixo configurar o arquivo ```schema.prisma```<br/>
```bash
npx prisma generate --schema ./prisma/schema.prisma
```

4. Logo em seguida pode executar <br/>
```bash 
npx prisma db pull ./prisma/schema.prisma
``` 
<br/>
para transformar seu esquema de banco de dados em um esquema Prisma.

Mais informações na documentação:
https://pris.ly/d/getting-started