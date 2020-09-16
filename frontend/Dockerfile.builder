FROM node:12.18.3 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
COPY rollup.config.js .
COPY index.html .
RUN npm ci --quiet && npm run build