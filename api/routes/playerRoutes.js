const express = require('express');

const playerController = require('./../controllers/playerController');

const router = express.Router({
  mergeParams: true //merge params from team router (teamId)
});

router
    .route('/top-5-scorers')
    .get(playerController.getTopScorers, playerController.getAllPlayers);

router
    .route('/top-5-cards')
    .get(playerController.getTopCards, playerController.getAllPlayers);

router
    .route('/')
    .get(playerController.getAllPlayers);

router
    .route('/:id')
    .get(playerController.getPlayer);

module.exports = router;