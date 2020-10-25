FROM node:latest
COPY "packages/website/build" "build"
COPY "packages/infrastructure/dist/server.js" "build/js"
ENTRYPOINT ["node", "/build/server.js"]