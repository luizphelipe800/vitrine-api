const { Strategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const { users } = require('../models');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
};

passport.use(new Strategy(options, async (payload, done) => {
  try{
    const user = await users.findByPk(payload.id);

    if(user){
      return done(false, user);
    }else{
      return done(false, null);
    }
  }catch(err){
    return done(err, null)
  }
}));

module.exports = passport;
