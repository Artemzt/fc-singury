const express = require('express');

const teamController = require('./../controllers/teamController');

const router = express.Router();

router
  .route('/')
  .get(teamController.getAllTeams);

router
  .route('/:id')
  .get(teamController.getTeam);

module.exports = router;