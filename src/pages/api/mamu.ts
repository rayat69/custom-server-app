import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      res.status(200).json({ msg: "post method" });
      break;

    case "GET":
      res.status(200).json({ msg: "get method" });
      break;

    default:
      res.status(401).json({ msg: "no method" });
      break;
  }
};

export default handler;
