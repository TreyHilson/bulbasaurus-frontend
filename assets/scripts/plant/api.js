const config = require('../config.js')
const store = require('../store.js')

const viewPlants = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token

    },
    data
  })
}

const removePlants = function (id) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token

    },

  })
}

const newPlant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token

    },
    data
  })
}

const updatePlant = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token

    },
    data
  })
}


module.exports = {
  viewPlants,
removePlants,
newPlant,
updatePlant
}
