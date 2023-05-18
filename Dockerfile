FROM node:18.7.0-alpine3.15
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm prune --production
ENV PORT 80
EXPOSE 80
CMD ["node", "server.js"]