const btnEl = document.getElementById('btn-el')
const inpEl = document.getElementById('inp-el')
const lengthResult =document.getElementById('length-result')
const volumeResult =document.getElementById('volume-result')
const massResult =document.getElementById('mass-result')

btnEl.addEventListener("click",function(){
  const inpVal = Number(inpEl.value)

  if(isNaN(inpVal) || inpEl.value === ""){
    alert("Please enter a valid number!")
    inpEl.value = ""
    lengthResult.innerHTML=""
    volumeResult.innerHTML=""
    massResult.innerHTML=""
    return
  }

  lengthMF(inpVal)
  volumeLG(inpVal)
  massLG(inpVal)
})


function lengthMF(inpValue){
  const oneMeter = 3.281
  const valInFeet = (inpValue * oneMeter).toFixed(3)
  const valInMeters = (inpValue / oneMeter).toFixed(3)
  const lengthSen = `<p class="result-para">
                  ${inpValue} metres = ${valInFeet} feet | ${inpValue} feet = ${valInMeters} metres
              </p>`
  lengthResult.innerHTML = lengthSen
}

function volumeLG(inpValue){
  const oneLitre = 0.264
  const valInGallons = (inpValue * oneLitre).toFixed(3)
  const valInLitres = (inpValue / oneLitre).toFixed(3)
  const volumeSen = `<p class="result-para">
                  ${inpValue} litres = ${valInGallons} gallons | ${inpValue} gallons = ${valInLitres} litres
              </p>`
  volumeResult.innerHTML = volumeSen
}

function massLG(inpValue){
  const oneKilogram = 2.204
  const valInPounds = (inpValue * oneKilogram).toFixed(3)
  const valInKg = (inpValue / oneKilogram).toFixed(3)
  const massSen = `<p class="result-para">
                  ${inpValue} Kilos = ${valInPounds} pounds | ${inpValue} pounds = ${valInKg} kilos
              </p>`
  massResult.innerHTML = massSen
}