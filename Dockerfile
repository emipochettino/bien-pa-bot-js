FROM node:lts-alpine
WORKDIR /app
COPY package.json /app
COPY app.js /app
RUN yarn install
CMD ["yarn", "start"]