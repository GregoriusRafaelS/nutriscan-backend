FROM node:16

WORKDIR /app

ENV PORT=3000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]