var palabras = [];
var palabra = '';
var hexes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var creaInformacion = ()=>{
  for (var j = 0; j < 100; j++) {
    palabra = '';
    for (var i = 0; i < 100; i++) {
      var randColor = Math.floor(Math.random()*360);
      var randHex1 = Math.floor(Math.random()*hexes.length);
      var randHex2 = Math.floor(Math.random()*9);
      var randHex3 = Math.floor(Math.random()*hexes.length);
      var randHex4 = Math.floor(Math.random()*hexes.length);
      var randHex = '0x1'+'F'+hexes[randHex2]+hexes[randHex3]+hexes[randHex4];
      randHex.toString(16);
      var randHex2 = String.fromCodePoint(randHex);
      // var unicodeChar = '\u';
      // unicodeChar = unicodeChar.concat(randHex);
      // console.log(randHex);
      var letra = '<span style="color:hsl('+randColor+',100%,50%)">'+randHex2+'</span>';
      palabra+=letra;
      // console.log(palabra);
    };
    palabras.push(palabra);
  }
  // console.log(palabras);
};
creaInformacion();



var openFunction = function(){
  var imagenInfo = document.getElementById("imagen");
  var audioF = document.getElementById('audioTag');
  var counter=0;
  var adder=0;
  var flip = true;
  var colores = ['black','black'];
  var valueSin;
  var valueCos;
  var stringLargo = '';
  var randomPosX=0;
  var randomPosY=0;

  var intervalo = setInterval(()=>{
    counter++;
    randomPosX = Math.floor(Math.random()*window.innerWidth);
    randomPosY = Math.floor(Math.random()*window.innerHeight-200);
    // imagenInfo.src = "assets/"+((counter%2)+1)+".jpg";
    // audioF.play();
    // valueSin = (Math.sin(counter*0.5)*300);
    // valueCos = (Math.cos(counter*0.5)*300);

    // var ventana = window.open("https://www.google.com/","_blank","height=300,width=300,top="+(valueSin+300)+",left="+(valueCos+600)+",scrollbars=no,resizable=no");
    // var ventana2 = window.open("https://www.google.com/","_blank","height=300,width=300,top="+(valueCos+300)+",left="+(valueSin+600)+",scrollbars=no,resizable=no");
    var ventana2 = window.open("https://www.google.com/","_blank","height=300,width=300,top="+randomPosY+",left="+randomPosX+",scrollbars=no,resizable=no");
    // var ventana2 = window.open("https://www.google.com/","_blank","height=300,width=300,top="+(window.innerHeight/2-100)+",left="+(window.innerWidth/2-100)+",scrollbars=no,resizable=no");

    // ventana.document.write(`
    //   <body style="background-color:`+colores[counter%(colores.length)]+`"></body>
    //   <h1 style="position:absolute;left:50%;transform:translate(-50%,0);font-size:0.8em">`+palabras[counter%(palabras.length)]+`</h1>
    // `);
    ventana2.document.write(`
      <body style="background-color:`+colores[counter%(colores.length)]+`"></body>
      <h1 style="position:absolute;left:50%;transform:translate(-50%,0);font-size:1em">`+palabras[counter%(palabras.length)]+`</h1>
    `);
    // ventana3.document.write(`
    //   <body style="background-color:`+colores[counter%(colores.length)]+`"></body>
    //   <h1 style="position:absolute;left:50%;transform:translate(-50%,0);font-size:0.8em">`+palabras[counter%(palabras.length)]+`</h1>
    // `);

    if (counter>=10) {
      stringLargo = stringLargo.slice(50);
      stringLargo = stringLargo.concat(palabras[counter%(palabras.length)]);
    }else{
      stringLargo = stringLargo.concat(palabras[counter%(palabras.length)]);
    }
    document.getElementById('geneticCode').innerHTML = stringLargo;

    setTimeout(()=>{
      // ventana.close();
      ventana2.close();
      // ventana3.close();
    },800);
    if (counter>=100) {
      clearInterval(intervalo);
    }
  },270);
};


//800 270

//300 370
