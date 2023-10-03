FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . .
CMD ["node", "dist/index.js"]