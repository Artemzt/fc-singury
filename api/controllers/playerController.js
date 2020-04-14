const Player = require('./../models/playerModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getTopScorers = catchAsync(async (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-goals';
  req.query.fields = 'name,surname,position,goals';
  next();
});

exports.getTopCards = catchAsync(async (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-redCards,-yellowCards';
  req.query.fields = 'name,surname,position,yellowCards,redCards';
  next();
});

exports.getAllPlayers = catchAsync(async (req, res, next) => {
  let filter = {};

  if (req.params.teamId) {
    filter = {
      teams: req.params.teamId
    };
  }

  const players = await Player.find(filter);


  //------SEND RESPONSE-------//
  res.status(200).json({
    status: 'success',
    results: players.length,
    data: {
      players: players
    }
  });
});

exports.getPlayer = catchAsync(async (req, res, next) => {
  const player = await Player.findById(req.params.id);

  if (!player) {
    return next(new AppError('No player found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      player: player
    }
  });
});

// To use nested routes like create player on tour or user
exports.setTeamId = (req, res, next) => {
  if (!req.body.teams) {
    req.body.teams = req.params.teamId;
  }
  next();
};

exports.createPlayer = catchAsync(async (req, res, next) => {
  const newPlayer = await Player.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      player: newPlayer
    }
  });
});

const createIncrementObj = (obj) => {
  let res = {};

  for (let value in obj) {
    if (obj.hasOwnProperty(value) && value.startsWith('add')) {
      const name = value.split('add')[1];
      res[name + 'PerSeason'] = obj[value];
      res[name + 'Overall'] = obj[value];
    }
  }

  return res;
};

exports.updatePlayer = catchAsync(async (req, res, next) => {
  // const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //     runValidators: true
  // });

  const player = await Player.findByIdAndUpdate(req.params.id,
    {
      $set: req.body,
      // need to check request and create obj with fields to increment
      $inc: createIncrementObj(req.body)
    }, {
      new: true,
      runValidators: true
    });

  if (!player) {
    return next(new AppError('No player found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      player: player
    }
  });
});

exports.deletePlayer = catchAsync(async (req, res, next) => {
  const player = await Player.findByIdAndRemove(req.params.id);

  if (!player) {
    return next(new AppError('No player found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});