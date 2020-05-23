
var titulo = function(){
  const textoCck = ['Instrucciones','Centro','Cultural','Kappa'];
  var counter = 0;
  var instervalo = setInterval(function(){
      document.getElementById("titleIns").innerHTML = textoCck[counter];
      counter = (counter+1)%textoCck.length;
  },2000);
};
