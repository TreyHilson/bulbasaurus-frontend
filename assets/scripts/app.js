'use strict'
const authEvents = require('./auth/events.js')
const plantEvents = require('./plant/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('#signout').on('click', authEvents.onSignOut)

  // Add button functions to view/add/delete plants click action.
  $('#viewplants').on('click', plantEvents.onShowPlants)
  $('#addPlant').on('submit', plantEvents.newPlant)
  $('#updatePlant').on('submit', plantEvents.onUpdatePlants)

  // Hide all da forms
  $('#addPlant').hide()

  $('.change-password').hide()

  $('.buttonbar').hide()
  $('.buttonbar').hide()

  $('#updatePlant').hide()
    $('#contentdiv').hide()
      $('.totodile').hide()








  plantEvents.addHandlers()

})
