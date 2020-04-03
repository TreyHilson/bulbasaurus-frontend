const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields= require('../../../lib/get-form-fields')
let plantid =''
// function to communicate to api and perform GET.

const onShowPlants = function (event) {
  event.preventDefault()
  api.viewPlants()
    .then(ui.plantShow)
    .catch(ui.plantFailure)
}
// Delete plant //

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
////////////////////////////////////
const plantData = function (plant_species, nickname, facts) {
return {
  "plant": {
      "plant_species": plant_species,
      "nickname": nickname,
      "facts": facts
    }
  }
}

// UPDATE PLANT ////
const onUpdatePlants = function (event) {

  event.preventDefault()

  const data = getFormFields(event.target)

  api.updatePlant(plantData(data.plant_species, data.nickname, data.fact),plantid)
  .then(function () {
    onShowPlants(event)
  })
    .catch(ui.plantFailure)

    plantid=""
}

const onUpdatePlantsid= function(event){
   plantid= $(event.target).data('id')

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
    $('.content').on('click', '.btn-update', onUpdatePlantsid)

}

module.exports = {
  onShowPlants,
  onDeletePlants,
  addHandlers,
  newPlant,
  onUpdatePlants
}
