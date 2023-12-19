FROM node:16

WORKDIR /app

ENV PORT=3000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all && npm run start"]