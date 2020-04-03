const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields= require('../../../lib/get-form-fields')
// function to communicate to api and perform GET.

const onShowPlants = function (event) {
  event.preventDefault()
  api.viewPlants()
    .then(ui.plantShow)
    .catch(ui.plantFailure)
}
const onDeletePlants = (event) => {
  const id = $(event.target).data('id')
  api.removePlants(id)
    .then(function () {
      onShowPlants(event)
    })
    .catch(ui.plantFailure)
}
// new plant //
const newPlant = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.newPlant(plantData(data.plant_species, data.nickname, data.fact))
  .then(function () {
    onShowPlants(event)
  })
    .catch(ui.plantFailure)
}
const plantData = function (plant_species, nickname, facts) {
return {
  "plant": {
      "plant_species": plant_species,
      "nickname": nickname,
      "facts": facts
    }
  }
}

// const deletePlant = function (event) {
//   console.log('you are clicking' + event.target.id)
//   api.deletePlant(event.target.id)
//     .then(ui.plantDeleted)
//     .catch(ui.plantFailure)
// }
//
const addHandlers = () => {
  $('.content').on('click', '.btn-delete', onDeletePlants)

}

module.exports = {
  onShowPlants,
  onDeletePlants,
  addHandlers,
  newPlant
}
