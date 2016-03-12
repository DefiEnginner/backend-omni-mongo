const express = require("express");
const router = express.Router();
const passport = require("passport");

const UserController = require("./../controllers/UserController");
const CompanyController = require("./../controllers/CompanyController");
const CardController = require("../controllers/CardController");

require("./../middleware/passport")(passport);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    status: "success",
    message: "Parcel Pending API",
    data: { version_number: "v1.0.0" }
  });
});

/**
 * User Endpoints
 */
router.post("/users", UserController.create);
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.get
);
router.put(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.update
);
router.delete(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.delete
);

/*
  POST Request
  Sample request:
    {
      "code": 1234
    }
*/
router.post(
  "/users/verifyCheck",
  passport.authenticate("jwt", { session: false }),
  UserController.confirmUserMobile
);

/*
  POST Request
  No body necessary

*/
router.post(
  "/users/resendVerification",
  passport.authenticate("jwt", { session: false }),
  UserController.resendVerificationEmail
);

/*
  POST Request
  Sample request:
    {
      "email": test@stanford.edu,
      "password": yolo420blazeit
    }
*/
router.post("/users/login", UserController.login);
router.post(
  "/users/refreshToken",
  passport.authenticate("jwt", { session: false }),
  UserController.refreshUserToken
);
router.post("/users/resetPassword", UserController.resetPassword);
router.post("/users/unsubscribe", UserController.unsubscribeEmails);
router.post(
  "/users/report",
  passport.authenticate("jwt", { session: false }),
  UserController.reportUser
);

/*
 * Company endpoints
 */

router.post("/companies", CompanyController.create);

/*
 * card endpoints
 */

router.post("/cards", CardController.create);
router.delete("/cards", CardController.delete);
router.put("/cards", CardController.update);
router.get("/cards", CardController.get);
router.get("/cards/searchquery", CardController.get);

/*
SLACK methods
*/
router.get("/auth/slack", passport.authenticate("slack"));

router.get(
  "/auth/slack/callback",
  passport.authenticate("slack"),
  UserController.getAuthToken
);

module.exports = router;
