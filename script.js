var KiloMetersInput=document.querySelector(".kilometers");
var MilesInput=document.querySelector(".miles");
var result=document.querySelector(".result");
const changedKiloValues=()=>{
    MilesInput.value=KiloMetersInput.value*0.621371;
    result.innerHTML=`${KiloMetersInput.value} KiloMeters = ${MilesInput.value} Miles`
}
const changedMilesValues=()=>{
   KiloMetersInput.value=MilesInput.value*1.60934;
   result.innerHTML=`${KiloMetersInput.value} KiloMeters = ${MilesInput.value} Miles`

}
