FROM node:alpine

WORKDIR /usr/src/app

RUN yarn global add lerna
RUN yarn config set network-timeout 600000 -g

COPY package.json .
RUN yarn

COPY packages/website ./packages/website
COPY packages/infrastructure ./packages/infrastructure

COPY lerna.json .
RUN lerna bootstrap
RUN lerna run build

ENTRYPOINT ["node", "./packages/infrastructure/dist/server.js"]
