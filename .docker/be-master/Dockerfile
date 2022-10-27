FROM node:18

WORKDIR /var/www/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

CMD tail -f /dev/null
