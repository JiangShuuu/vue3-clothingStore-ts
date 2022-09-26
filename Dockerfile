# nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./dist .

COPY ./nginx/docker.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]