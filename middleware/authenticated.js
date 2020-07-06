var express = require('express');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

const { users } = require('../models/index');
var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '5[]5|/-\L-/-\p|';

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    let user = await users.findOne({ where: {id: jwt_payload.id} });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }

  } catch (error) {
    done(error, false);
  }
}));

module.exports = passport.authenticate('jwt', { session: false });