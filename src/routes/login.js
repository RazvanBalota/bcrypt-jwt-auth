import bcrypt from "bcrypt";
import { getUser } from "../lib/getUser.js";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await getUser(username);
    const getPassword = await bcrypt.compare(password, user.password);

    if (!getPassword) {
      return res.status(404).json({
        error: "invalid password",
      });
    }
    const token = jwt.sign(user, process.env.SECRET, { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.redirect("/welcome");
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};
