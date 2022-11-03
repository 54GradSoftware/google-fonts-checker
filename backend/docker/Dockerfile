FROM node:alpine

COPY ./backend /home/node/app/backend
COPY ./helpers /home/node/app/helpers

WORKDIR /home/node/app/backend

RUN npm ci

EXPOSE 3001
CMD ["nodejs", "index.js"]
