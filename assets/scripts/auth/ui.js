'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('SUCCESS 🌵')
  $('#message').hide(2000)
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const signUpFailure = function () {
  $('#message').show()
  $('#message').text('NOOB FAIL 💩')
  $('#message').hide(2000)
  $('#message').addClass('failure')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const signInSuccess = function (data) {
      $('#message').show()
      $('#message').text('SUCCESS 🌵')
      $('#message').hide(2800)
      $('#sign-up').hide(2000)
      $('#sign-in').hide(2000)
      $('.totodile').show(800)



  $('.buttonbar').show(1300)

  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')


  store.user = data.user
}

const signInFailure = function () {
  $('#message').show()
  $('#message').text('NOOB FAIL 💩')
  $('#message').hide(2000)
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').show()
  $('#message').text('SUCCESS 🌵')
  $('#message').hide(2000)
    $('#change-password').hide(800)
    $('#change-password').closest('form').find('input[type=text], textarea').val('')
    $('#change-password').closest('form').find('input[type=password], textarea').val('')
}
const changePasswordFailure = function () {
    $('#message').show()
  $('#message').text('NOOB FAIL 💩')
  $('#message').hide(2000)
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
  }

const signOutSuccess = function (data) {
    $('#message').show()
  $('#message').text('SIGNED OUT SUCCESSFULLY')
  $('#message').hide(2000)
  $('#contentdiv').hide()
  $('#addPlant').hide()

  $('.change-password').hide()

  $('.buttonbar').hide()
  $('.buttonbar').hide()

  $('#updatePlant').hide()
  $('#sign-in').show(2000)

  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}
const signOutFailure = function (data) {
  $('#message').text()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
