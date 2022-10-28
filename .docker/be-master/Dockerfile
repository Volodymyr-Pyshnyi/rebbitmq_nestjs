FROM node:16-alpine

WORKDIR /var/www/app

RUN npm install -g @nestjs/cli

COPY ./package*.json ./

RUN npm install
#RUN npm install --only=production

#COPY . .

#CMD npm run start
#CMD npm run start:dev

CMD tail -f /dev/null
