const routes = require("express").Router();
const auth = require("./middlewares/passport");
const upload = require("./middlewares/upload");

const users = require("./controllers/users");
const shops = require("./controllers/shops");
const files = require("./controllers/files");

routes.get("/healthcheck", (req, res) => res.send("TUDO OK"));
routes.get("/teste", (req, res) => res.send("ISSO É BRABO"));

routes.post("/login", users.validate);
routes.post("/register", users.create);
routes.get("/activate/:utoken", users.active);

routes.get("/shops", shops.index);
routes.get("/shops/:id", shops.show);

routes.get("/files/:id", files.show);

routes.use(auth.authenticate("jwt", { session: false }));

routes.get("/users", users.show);
routes.put("/users/:id", users.update);
routes.delete("/users/:id", users.remove);

routes.post("/shops", shops.create);
routes.put("/shops/:id", shops.update);
routes.delete("/shops/:id", shops.remove);

routes.post("/files/:id", upload.single("shopImg"), files.create);
routes.delete("/files/:id", files.remove);

module.exports = routes;
