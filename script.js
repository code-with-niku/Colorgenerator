
  const color = document.querySelector("#color");
  var text = document.querySelector("#text");
  const generate = document.querySelector("#generate");
  const copy = document.querySelector("#copy");
  var randomcolor = "";

  generate.addEventListener("click",()=>{
     const random = Math.floor(Math.random()*0xffffff);
     randomcolor ="#" + random.toString(16);
    color.style.backgroundColor = randomcolor;
    text.innerHTML=randomcolor;
  })
  copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(randomcolor);
  })
  
  
  const mode = document.querySelector("#mode");
  mode.addEventListener("click",() => {
  document.body.classList.toggle("darkmode");
  if(document.body.classList.contains("darkmode")){
  mode.src="moon.png";
  }else{
   mode.src="sun.png";
  }
  text.classList.toggle("darkmode");
  copy.classList.toggle("darkmode");
  generate.classList.toggle("darkmode");
})

