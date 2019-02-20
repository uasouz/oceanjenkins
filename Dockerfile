#build

FROM node:latest as builder

WORKDIR /usr/src/service

COPY package.json .

RUN npm install --only-production

COPY . .

RUN npm run build

#serve
FROM node:alpine

WORKDIR /usr/src/service

RUN npm install pm2 -g

COPY --from=builder /usr/src/service/node_modules ./node_modules

COPY --from=builder /usr/src/service/dist .

COPY --from=builder /usr/src/service/src/.env .env

EXPOSE 3030

CMD [ "pm2-runtime", "index.js" ]


