FROM node:16-alpine

WORKDIR /var/www/app


RUN npm install -g @nestjs/cli

COPY . .

RUN npm install

CMD npm run start:dev

#CMD tail -f /dev/null
