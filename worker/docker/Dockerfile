FROM node:alpine

# Installs latest Chromium package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY ./worker /home/node/app/worker
COPY ./helpers /home/node/app/helpers

WORKDIR /home/node/app/worker

RUN npm ci

CMD ["nodejs", "index.js"]
