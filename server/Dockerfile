FROM node:16-alpine

WORKDIR /app/server

COPY package.json ./server

COPY yarn.lock ./server

RUN yarn install --frozen-lockfile

COPY . .