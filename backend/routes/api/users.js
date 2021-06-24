// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// backend/routes/api/users.js
// ...
const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];
// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );
//API/users/
// Create the API route here
// express 
router.get('/', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users)
}));
// http://localhost:5000/api/users

  // create a router here
  // You'll need an asyncHandler. Import the database stuff you'll need
  //Import other middleware
  //Create the API route here
  // Rmemeber to export the router too.

module.exports = router;
