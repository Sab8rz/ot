FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./
RUN pnpm install --prod

COPY . .

EXPOSE 5000

CMD ["node", "src/index.js"]