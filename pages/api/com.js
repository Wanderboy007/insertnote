import initDB from "../../helper/initDB";
import comments from "../../models/comments";

initDB();

export default (req, res) => {
  comments.find().then((products) => {
    res.status(200).json(products);
  });
};
