
var openFunction = function(){
  var counter=0;
  var adder=0;
  var flip = true;
  var colores = ['white','rgba(0,255,0,1)'];
  var intervalo = setInterval(()=>{
    counter++;

    console.log(counter);
    if(flip){
      adder++;
      var ventana = window.open("https://www.google.com/","_blank","height=300,width=300,top="+((window.innerHeight-300) + (-(window.innerHeight-300)+(20*adder)))+",left="+(20*adder)+",scrollbars=no,resizable=no");
      if(adder>=19){flip=false};
    }else if(flip==false){
      adder--;
      var ventana = window.open("https://www.google.com/","_blank","height=300,width=300,top="+((window.innerHeight-300) - (-(window.innerHeight-300)+(20*adder)))+",left="+(20*adder)+",scrollbars=no,resizable=no");
      if(adder<=0){flip=true}
    }
    ventana.document.write(`
      <body style="background-color:`+colores[counter%(colores.length)]+`"></body>
      <img src="assets/`+((counter%2)+1)+`.jpg" style="width:200px"></img>
      <h1 style="position:absolute;left:50%;transform:translate(-50%,0)">Hello world</h1>
    `);
    setTimeout(()=>ventana.close(),250);
    if (counter>=80) {
      clearInterval(intervalo);
    }
  },120);
};
