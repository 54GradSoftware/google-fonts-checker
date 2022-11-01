FROM node:16-alpine AS builder

COPY ./frontend /home/node/app/frontend
COPY ./helpers /home/node/app/helpers

WORKDIR /home/node/app/frontend

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY ./frontend/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/app/frontend/dist/ /var/www/html/
