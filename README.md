# nutriscan-backend

---

## Table of Content

---
- [Installation](#installation)
- [API Documentation](#api-documentation)



## Installation

---

You need to install node v16.14.2 https://nodejs.org/en/blog/release/v16.14.2/ or latest https://nodejs.org/en/download/ \
You need to install all package with command:

```text
npm install
```

Create database MySQL with command:

```text
npx sequelize db:create
```

Create a table automatically with command:

```text
npx sequelize db:migrate
```

Insert data into tables from all seeders with command:

```text
npx sequelize-cli db:seed:all
```

You can run specific seeder with following command:

```text
 npx sequelize-cli db:seed --seed <name file.js>
```

If you want to Drop Database, you can do it with terminal command:

```text
 npx sequelize db:drop
```

Before start, create a .env file with contents like .env.example \
Start API with command:

```text
npm run start
```

or

```text
npm run start-dev
```

## API Documentation

---
[Postman API Documentation](https://documenter.getpostman.com/view/29112714/2s9Ykodh31)


Link ML: https://colab.research.google.com/drive/14GnO43xhJ2q6WsQP0t4y3iE2vDlIYIue?usp=sharing
Link MD : https://www.figma.com/file/MTZxNVuX7Q51GszXTHbnmO/Untitled?type=design&node-id=1%3A3&mode=design&t=slUVpHRtA5wTZTZP-1

https://documenter.getpostman.com/view/29112714/2s9Ykodh31