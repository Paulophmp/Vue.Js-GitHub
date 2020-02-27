FROM node:10
RUN echo "*"
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR "/home/node/app"
USER "node"
COPY --chown=node:node .. /home/node/app

RUN npm install

CMD [ "npm", "run", "serve"]
