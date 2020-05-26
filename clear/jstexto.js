var aceptar = function(){
  var counter = 25;
  var instervalo = setInterval(function(){
      document.getElementById("texto").style.lineHeight = counter+"px";
      counter -= 0.3;
      if (counter<=0) {
        clearInterval(instervalo);
      }
  },10);
};
