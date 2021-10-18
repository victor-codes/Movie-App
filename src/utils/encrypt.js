import bcryptjs from "bcryptjs";

function hashIt(password) {
  const salt = bcryptjs.genSaltSync(6);
  return bcryptjs.hashSync(password, salt);
}

function compareIt(password, hashedPassword) {
  return bcryptjs.compare(password, hashedPassword);
}

export { hashIt, compareIt };
