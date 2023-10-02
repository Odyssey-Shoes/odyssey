import jwt from "jsonwebtoken";

// this function will creates a jwt token for user object when it passes to the function

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};
