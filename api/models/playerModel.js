const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A player must have a name'],
      trim: true
    },
    surname: {
      type: String,
      required: [true, 'A player must have a name'],
      trim: true
    },
    number: {
      type: Number,
      required: [true, 'A player must have a number']
    },
    dateOfBirth: {
      type: String,
      required: [true, 'A player must have a DOB'],
      maxlength: [12, 'A player DOB must have <= 12 chars'],
      minlength: [8, 'A player DOB must have >= 8 chars']
    },
    position: {
      type: String,
      required: [true, 'A player must have a position']
    },
    imageFront: {
      type: String
    },
    imageBack: {
      type: String
    },
    description: {
      type: String
    },
    yellowCardsPerSeason: {
      type: Number,
      default: 0
    },
    yellowCardsOverall: {
      type: Number,
      default: 0
      /// NEED TO CHECK HOW TO CALCULATE USING yellowCards field
    },
    redCardsPerSeason: {
      type: Number,
      default: 0
    },
    redCardsOverall: {
      type: Number,
      default: 0
      /// NEED TO CHECK HOW TO CALCULATE USING redCards field
    },
    assistsPerSeason: {
      type: Number,
      default: 0
    },
    assistsOverall: {
      type: Number,
      default: 0
      /// NEED TO CHECK HOW TO CALCULATE USING goals field
    },
    goalsPerSeason: {
      type: Number,
      default: 0
    },
    goalsOverall: {
      type: Number,
      default: 0
      /// NEED TO CHECK HOW TO CALCULATE USING goals field
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    inactivePlayer: {
      type: Boolean,
      default: false
    },
    // teams: [{
    //   type: mongoose.Schema.Types.ObjectID,
    //   ref: 'Team',
    //   required: [true, 'Player must belong to a team']
    // }]

  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  });

playerSchema.virtual('age').get(function() {
  const myDate = this.dateOfBirth.split('/');
  const dateNow = new Date();
  let age = dateNow.getFullYear() - myDate[2];

  let result = '';

  result += (dateNow.getMonth() + 1) - myDate[1];
  result += dateNow.getDate() - myDate[0];

  if (result.includes('-')) {
    return age - 1
  }

  return age;

});

/*------------------QUERY MIDDLEWARE----------------*/
//'this' points to the current query not the document on 'pre'

//hide results with secretTour === true
//but not work for 'findOne' fix -  regular expression /^find/
playerSchema.pre('find', function(next) {
  this.find({
    inactivePlayer: {
      $ne: true
    }
  });
  next();
});

playerSchema.pre(/^find/, function(next) {

  this.populate({
    path: 'teams',
    select: 'name'
  });

  next();

});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;