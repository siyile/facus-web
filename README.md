# Facus Website

Facus web is a user-end web application using React, Typescript and Material UI. We are not using Redux in our project, since we thought our application is not complex and there are powerful react hooks we can use.

### Quick Link
- React: https://reactjs.org/
- TypeScript: https://www.typescriptlang.org/
- Material UI: https://material-ui.com/

## Getting Started
### Prerequisite
Node and yarn is installed.

### Start devloping server
```Shell
git clone https://github.com/siyile/facus-api
cd facus-web/packages/website/
yarn # Install dependency, run only on first time
yarn start
```

Server will start at localhost:3000.

We use eslint and prettier to lint our codes and format our code. Please configure them in your favorite IDE(VScode, WebStorm, etc...)

Prettier is mandatory used before commit (through git hooks). We do this to make sure everyone has the same code style.
