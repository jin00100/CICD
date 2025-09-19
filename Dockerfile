FROM node:18-alpine

WORKDIR /usr/src/app

COPU package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]

