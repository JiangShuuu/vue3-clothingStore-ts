# node
FROM node:lts

WORKDIR /app

COPY . .

COPY .env.production .env.production

RUN yarn

RUN yarn build

# nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=0 /app/dist .

COPY ./nginx/docker.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]