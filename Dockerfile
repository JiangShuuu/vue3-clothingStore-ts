# node
FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG VITE_APIURL
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID

ENV VITE_APIURL $VITE_APIURL
ENV VITE_FIREBASE_API_KEY $VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN $VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID $VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET $VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID $VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID $VITE_FIREBASE_APP_ID

RUN npm run build

# nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=0 /app/dist .

COPY ./nginx/docker.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]