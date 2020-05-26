var aceptar = function(){
  var counter = 25;
  var toggler = 0;
  var colores = ["black","white"];
  console.log(document.getElementsByClassName("midText")[0]);
  var instervalo = setInterval(function(){
      document.getElementsByClassName("midText")[0].style.backgroundColor = colores[toggler];
      document.getElementById("texto").style.lineHeight = counter+"px";
      counter -= 0.3;
      toggler = (toggler+1)%2;
      if (counter<=0) {
        clearInterval(instervalo);
      }
  },10);
};
