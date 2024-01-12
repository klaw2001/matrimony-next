import jwt from "jsonwebtoken";

export const getDataFromToken = (req, res) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    console.log(error.message);
  }
};
