require("dotenv").config();
const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USERNAME, ADMIN_FULLNAME, ADMIN_CONTACT, ADMIN_AGE, ADMIN_GENDER } = process.env;

module.exports = [
  {
    "email": ADMIN_EMAIL,
    "password": ADMIN_PASSWORD,
    "username": ADMIN_USERNAME,
    "fullName": ADMIN_FULLNAME,
    "phoneNumber": ADMIN_CONTACT,
    "age": ADMIN_AGE,
    "gender": ADMIN_GENDER,
    "role": "Admin"
  }
]