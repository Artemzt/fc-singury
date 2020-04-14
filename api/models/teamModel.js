const mongoose = require('mongoose');
const Player = require('./playerModel');

const teamSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A team must have a name']
    },
    hometown: {
      type: String,
      required: [true, 'A team must have a hometown']
    },
    imageCover: {
      type: String
    },
    logo: {
      type: String
    },
    description: {
      type: String
    },
    foundedOn: {
      type: Number,
      required: [true, 'A team must have a foundation year'],
      maxlength: [4, 'A team foundation year must have 4 digit year'],
      minlength: [4, 'A team foundation year must have 4 digit year']
    },
    historyCover: {
      type: String
    },
    history: [
      {
        year: Number,
        name: String,
        position: Number,
        mvp: String,
        mvpPhoto: String,
        cup:
          {
            name: [String],
            img: [String],
          },
        event: {
          name: [String],
          description: [String],
          img: [String]
        }
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    },

    //referencing
    headOfTeam: [{
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Player'
    }],
    headCoach: [{
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Player'
    }]
  },

  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  });

teamSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'headOfTeam',
    select: 'name surname position age'
  }); // populate is to fill selected tour with user data from Players table

  next();
});


const Team = mongoose.model('Team', teamSchema);

module.exports = Team;