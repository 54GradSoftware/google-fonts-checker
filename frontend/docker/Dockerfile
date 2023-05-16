FROM node:16-alpine AS builder

ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY

ENV VUE_APP_SUPABASE_URL=$SUPABASE_URL
ENV VUE_APP_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY

COPY ./frontend /home/node/app/frontend
COPY ./helpers /home/node/app/helpers

WORKDIR /home/node/app/frontend

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY ./frontend/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/app/frontend/dist/ /var/www/html/
