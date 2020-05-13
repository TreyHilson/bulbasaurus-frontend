// handlebars function
const showplantsTemplate = require('../templates/plant-listing.handlebars')

// show all the plants in array.

//  const plantShow = function (data) {
//  let content = " "
//   for (let i = 0; i < data.plants.length; i++) {
//     content += "<br>"+data.plants[i].nickname
//     content += "<br>"+data.plants[i].plant_species
//     content += "<br>"+data.plants[i].facts
//     content += "<br><br>"
//
// }
//   $('#contentdiv').html(content)
// }
const plantShow = (data) => {

  const showplantsHtml = showplantsTemplate({ plants: data.plants })
  $('#contentdiv').show(800)
  $('#contentdiv').html(showplantsHtml)
  $('#updatePlant').hide(800)
  $('.change-password').hide(800)

}


// General failure message.
const plantFailure = function () {
  $('#message').text('Ruh oh')
}
// user messaging for plant deletion.
const plantDeleted = function () {
  $('#message').text('PLANT DELETED')
}



module.exports = {
  plantShow,
  plantFailure,
  plantDeleted
}
