function setValue(value){
          color2 = document.getElementById("color2")
         var myName = +prompt ("enter color")
        color2.value
}
function(setValue)


function bulbOff(e){
    console.log("mouse")
    e.src = "off.gif"
}
function bulbOn(e){
    console.log(e)
    e.src = "on.gif.jpg"
}

function changeImg(btn){
    var img = document.getElementById("carImg");

    // console.log(btn.innerHTML)


        if(btn.innerHTML  == "next image"){
            img.src = "car1.jpg"
            btn.innerHTML = "prev Image"

        }else if(btn.innerHTML  == "prev Image"){
            img.src = "car1.jpg"
            btn.innerHTML = "next image"
            

        }




}



function bigImg(){
    var carImg = document.getElementById("carImg")
    // carImg.style.border = "1px solid red"
    console.log(carImg.className)
    
    carImg.className += " bigImg"


}
function bigImg(){
    var carImg = document.getElementById("carImg")
    // carImg.style.border = "1px solid red"
    console.log(carImg.className)
    
    carImg.className += " bigImg"


}