const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({message: "Provide username and Password Please"});
    return;
  }

  if (password.length < 7) {
    res.status(400).json({message: 'Please make password at least 7 characters long for security purposes.'});
    return;
  }

  User.findOne({
    username
  }, '_id', (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({message: "the username already exists"});
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({username: username, password: hashPass});

    theUser.save((err) => {
      if (err) {
        res.status(400).json({message: "something went wrong here"});
        return;
      }

      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({message: "Something went wrong here"});
          return;
        }
        res.status(200).json(req.user);
      });
    });

  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if(err) {
      res.status(500).json({ message: "something went wrong"});
      return;
    }

    if(!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if(err) {
        res.status(500).json({ message: "Something went wrong here"});
        return;
      }

      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "success"});
});


authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized "});
});

module.exports = authRoutes;
