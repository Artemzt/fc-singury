const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Team = require('./../models/teamModel');

exports.getAllTeams = catchAsync(async (req, res, next) => {
  const teams = await Team.find();

  res.status(200).json({
    status: 'success',
    results: teams.length,
    data: {
      team: teams
    }
  });
});

exports.getTeam = catchAsync(async (req, res, next) => {
  const team = await Team.findById(req.params.id).populate('players');

  if (!team) {
    return next(new AppError('No team found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: team
    }
  });
});
