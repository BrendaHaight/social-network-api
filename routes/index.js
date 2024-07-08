const router = require("express").Router();
const userRouters = require("./userRouter");
const thoughtRouters = require("./api/thoughtRoutes");

router.use("/users", userRouters);
router.use("/thoughts", thoughtRouters);

module.exports = router;
