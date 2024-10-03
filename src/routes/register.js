import fs from "fs";
import bcrypt from "bcrypt";
import path from "path";
import jwt from "jsonwebtoken";

const asyncFs = fs.promises;

export default async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const filePath = path.resolve("../src/db/users.json");
  try {
    const data = await asyncFs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    json.users.push({ username, password: hashedPassword });

    await asyncFs.writeFile(filePath, JSON.stringify(json, null, 2));

    const token = jwt.sign({ username }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.redirect("/welcome");
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
