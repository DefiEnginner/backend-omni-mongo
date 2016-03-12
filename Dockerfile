FROM node:10-alpine

WORKDIR /home/docker/omnibackend-mongo

COPY . ./

RUN npm install

CMD [ "npm", "start" ]
