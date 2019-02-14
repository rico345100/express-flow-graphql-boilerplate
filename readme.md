# Express + GraphQL + Flow Basic Boilerplate
Boilerplate for Express + GraphQL + Flow combo. Note that using Apollo Server as GraphQL server.

## What's in here?
- Flow
- Babel
- Express
- GraphQL(Apollo Server)
- Nodemon

## Features
- Static type checking
- Live reload (feat. Nodemon)

## How to run
### Production build
Type

```bash
$ npm start
```

It will automatically transpile files in src/ with set NODE_ENV=prodction and run express server.

Open your browser and connect to [http://localhost:4000/graphql](http://localhost:4000/graphql) to check it works.

### Development Build
To just build, type:

```bash
$ npm run build-dev
```

However in development environment, I recommend to you use:

```bash
$ npm run dev
```

This command will execute nodemon to check the file changes and execute rebuild & serving process automatically.

## Future plans
- JS uglify with Babel

## License
MIT License. Do whatever you want.



ENJOY!
