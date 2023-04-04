import initDB from "../../helper/initDB";
import users from "../../models/user";

initDB();

export default (req, res) => {
  try {
    // const a = users.find();

    users.find().then((products) => {
      res.status(200).json(products);
    });

    // res.Status(200).json(a);
  } catch (errors) {}
};
