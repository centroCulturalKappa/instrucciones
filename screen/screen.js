window.onload = function(){
  var increase = 0;
  var increase2 = 0;
  var sinIncrease;
  var cosIncrease;
  setInterval(function(){
    increase2 = (increase2+1);
    sinIncrease = ((Math.sin(increase2*0.01)*0.5+0.5)*100);
    cosIncrease = ((Math.cos(increase2*0.01)*0.5+0.5)*100);
    var ranColor = Math.floor(Math.random()*100);
    document.body.style.backgroundColor = "hsl("+0+", 0%, "+sinIncrease+"%)";
    document.getElementById('titlePassword').style.color = "hsl("+0+", 0%, "+cosIncrease+"%)";
    document.getElementById('centerWrap').style.color = "hsl("+0+", 0%, "+cosIncrease+"%)";
    // console.log('HOLA');
  }, 100);
  var arrayKappa = ['@','CENTRO','CULTURAL','KAPPA'];
  setInterval(function(){
    increase = (increase+1)%arrayKappa.length;
    document.getElementById('h1Password').innerHTML = arrayKappa[increase];

    // console.log('HOLA');
  }, 1000);


};
