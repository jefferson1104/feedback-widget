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