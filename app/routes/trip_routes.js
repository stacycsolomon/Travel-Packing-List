const express = require('express')
const passport = require('passport')
const Trips = require('../models/trips')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
router.get('/trips', requireToken, (req, res, next) => {
  Trips.find({ owner: req.user.id })
    .then(trips => {
      return trips.map(trip => trip.toObject())
    })
    .then(trips => res.status(200).json({ trips: trips }))
    .catch(next)
})

// SHOW
router.get('/trips/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Trips.find({ owner: req.params.id, id: id })
    .then(handle404)
    .then(trip => res.status(200).json({ trip: trip.toObject() }))
    .catch(next)
})

// CREATE
router.post('/trips', requireToken, (req, res, next) => {
  req.body.trip.owner = req.user.id

  Trips.create(req.body.trip)
    .then(trip => {
      res.status(201).json({ trip: trip.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/trips/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.trip.owner

  Trips.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)

      return trip.updateOne(req.body.trip)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/trips/:id', requireToken, (req, res, next) => {
  Trips.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)
      trip.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
