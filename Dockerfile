FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm
RUN pnpm i
COPY . .
RUN pnpm prune --prod
EXPOSE 4000
CMD ["node", "server.js"]