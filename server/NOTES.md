## Initial commands to create a NodeJS project
```bash
  # Init project using the command 
  $ npm init -y

  # Install as project dependency, typescript, types for NodeJS and ts-node-dev
  $ npm i typescript @types/node ts-node-dev -D

  # Create tsconfig.json
  $ npx tsc --init
```

## Configure tsconfig.json file
First create the folder with the name **"src"** and in the folder create a file with the name **server.ts**

result: 
**"src/server.ts"**

- Look for the line with the name **"target"** and set the value equal to below:
```json
  "target": "es2020"
```

- Look for the line with the name **"rootDir"** and set the value equal to below:
```json
  "rootDir": "./src",
```

- Look for the line with the name **"outDir"** and set the value equal to below:
```json
  "outDir": "./dist",
```

## Create script to run project on local machine
Look for the file "package.json", in the file inside "script" add the line below
```json
  "dev": "ts-node-dev src/server.ts",
```

## ExpressJS 
Now we are going to install the mini framework or we can call it **ExpressJS** library, with it we will work the **HTTP** part of our server, summarizing dealing with routes and etc...

```bash
  # Install ExpressJS
  $ npm i express

  # Install ExpressJS types
  $ npm i -D @types/express
```

Let's code in our file that we created called "server.ts", leave it as in the example below, basically we are instantiating our express with its basic initial settings, defining the port of our server **3333** and creating a route called **/users** which in the server response returns a message called "Hello World"

**"src/server.ts"**
```typescript
  import express from 'express';

  const app = express();

  app.get('/users', (request, response) => {
    return response.send('Hello World!');
  });

  app.listen(3333, () => {
    console.log('HTTP Server running!');
  });
```

## Run project
To start our project run the command calling our script that we created in **package.json**.
```bash
  $ npm run dev
```

we can test in our browser by going to **http://localhost:3333/users**


## Prisma ORM
```bash
  # Install prisma dev dependecy
  $ npm i prisma

  # Install prisma client
  $ npm i @prisma/client

  # Initi prisma on project
  $ npx prisma init

  # Create your migration
  # after run command, insert name for the new migration, ex: create users
  $ npx prisma migrate dev

  # Open interface prisma studio for view databases and tables in your browser
  $ npx prisma studio
```

## Jest and SWC (install and configure to typescript nodejs project)
```bash
  # Install jest develop dependency
  $ npm i -D Jest

  # Install jest types for typescript
  $ npm i -D @types/jest

  # Init Jest
  $ npx jest --initi

  # Questions to jest init
  # Would you like to use Jest when running "test" script in "package.json"?
  $ y
  # Would you like to use Typescript for the configuration file? › (y/N)
  $ y
  # hoose the test environment that will be used for testing
  $ node
  # Do you want Jest to add coverage reports?
  $ y
  # Which provider should be used to instrument code for coverage?
  $ v8
  # Automatically clear mock calls, instances, contexts and results before every test?
  $ y

  # Install TS NODE
  $ npm i -D ts-node

  # Install SWC to develop dependency
  $ npm i -D @swc/jest
```

In your file "jest.config.js" look for the line **"transform: undefined"**, uncomment and change it as follows:
```typescript
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
```

After configuring jest in your project, to run the tests run the command:
```bash
  # to run the test once
  $ npm run test

  # to run the test in "watch" mode
  $ npm run test --watch
```