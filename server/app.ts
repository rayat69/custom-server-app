import next, { NextApiHandler } from "next";
import express, { RequestHandler, Router } from "express";
import { hello, mamu } from "./routes";

const port = 4321;
const app = next({ dev: true });
const server = express();
const handler = app.getRequestHandler();
const router = Router()

const typeHandler = (handler: NextApiHandler) => {
  const handler1: any = handler;
  const handler2: RequestHandler = handler1;
  return handler2
};

router.use('/hello', typeHandler(hello));

router.use('/mamu', typeHandler(mamu))

app
  .prepare()
  .then(() => {
    server.use("/api", router);

    server.get("*", (req, res) => {
      handler(req, res);
    });

    server.listen(port, () => {
      console.log(`>_ Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
