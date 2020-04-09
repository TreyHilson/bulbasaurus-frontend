const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields= require('../../../lib/get-form-fields')
let plantid =''
let plant_species = ''
let plantNickname = ''
let plantFacts = ''
// function to communicate to api and perform GET.



const onShowPlants = function (event) {
  event.preventDefault()
  api.viewPlants()
    .then(ui.plantShow)
    .catch(ui.plantFailure)
      $('#contentdiv').show()
      $('#addPlant').hide(800)
      $('#updatePlant').hide(800)
      $('.totodile').hide(800)
}
// ------------- Delete plant -----------------//

const onDeletePlants = (event) => {
  const id = $(event.target).data('id')
  api.removePlants(id)
    .then(function () {
      onShowPlants(event)
    })
    .catch(ui.plantFailure)
}
// ----------------- new plant // ADDPLANT -----------------
const newPlant = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.newPlant(plantData(data.plant_species, data.nickname, data.fact))

  .then(function () {
    onShowPlants(event)
  })
    .catch(ui.plantFailure)
      $('#addPlant').closest('form').find('input[type=text], textarea').val('')
      $('#addPlant').hide(800)
      $('#contentdiv').show(800)
}
//----------------- Plantdata Fields -----------------


const plantData = function (plant_species, nickname, facts) {
return {
  "plant": {
      "plant_species": plant_species,
      "nickname": nickname,
      "facts": facts
    }
  }
}

// ----------------- // UPDATE PLANT Handlebars //// -----------------
const onUpdatePlants = function (event) {
$('#updatePlant').hide(800)
  event.preventDefault()

  const data = getFormFields(event.target)

  api.updatePlant(plantData(data.plant_species, data.nickname, data.fact),plantid)

  .then(function () {
    onShowPlants(event)
  })
    .catch(ui.plantFailure)

    plantid=""

    $('#updatePlant').closest('form').find('input[type=text], textarea').val('')
    $('#contentdiv').show(800)
}

// ----------------- UPDATE PLANT ID GRABBER 'id' -----------------
const onUpdatePlantsid = function(event) {
    plantid = $(event.target).data('id')
    plant_species = $(event.target).data('plant_species')
    plantNickname = $(event.target).data('nickname')
    plantFacts = $(event.target).data('facts')
    $('#updatePlant').show(800)
    $('#contentdiv').hide(800)
    // $('#plant_species').closest('form').find('input[type=text], textarea').val('BOO')
    $("input[name*='plant_species']" ).val(plant_species);
      $("input[name*='nickname']" ).val(plantNickname);
        $("input[name*='fact']" ).val(plantFacts);

}

// ----------------- Button Handlers -----------------
const showAddPlant = function () {
      $('#addPlant').show(800)
    $('.totodile').hide(800)
    $('#contentdiv').hide(800)
    $('#updatePlant').hide(800)
    $('.change-password').hide(800)
}

const showChangePassword = function () {
      $('.change-password').show(800)
$('#contentdiv').hide(800)
$('#addPlant').hide(800)
$('#updatePlant').hide(800)
  $('.totodile').hide(800)
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
    $('#addPlantButton').on('click', showAddPlant)
    $('#newPassword').on('click', showChangePassword)


}

module.exports = {
  onShowPlants,
  onDeletePlants,
  addHandlers,
  newPlant,
  onUpdatePlants,
  showAddPlant,
  showChangePassword
}
