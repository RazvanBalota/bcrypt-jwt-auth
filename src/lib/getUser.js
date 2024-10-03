import path from "path";
import fs from "fs";

const asyncFs = fs.promises;

export const getUser = async (username) => {
  const filePath = path.resolve("../src/db/users.json");

  try {
    const data = await asyncFs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    const user = json.users.find((user) => user.username === username);

    if (!user) {
      throw new Error("No user found");
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
