FROM node:16.17-buster

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 3000

RUN yarn build

RUN yarn 

CMD [ "yarn", "start" ]

 