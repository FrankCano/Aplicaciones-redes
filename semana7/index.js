const express = require('express');
const pug = require('pug');

var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


let texto1 = "El cifrado es un procedimiento que utiliza un algoritmo de cifrado con cierta\
clave (clave de cifrado) para transformar un mensaje, sin atender a su estructura lingüística\
o significado, de tal forma que sea incomprensible o, al menos, difícil de comprender a toda\
persona que no tenga la clave secreta (clave de descifrado) del algoritmo. Las claves de cifrado \
y de descifrado pueden ser iguales (criptografía simétrica), distintas (criptografía asimétrica) o \
de ambos tipos (criptografía híbrida).";

let texto2 = 'A veces el texto cifrado se escribe en bloques de igual longitud. A estos bloques\
 se les denomina grupos. Estos grupos proporcionaban una forma de verificación adicional, ya que\
 el texto cifrado obtenido debía tener un número entero de grupos. Si al cifrar el texto plano\
 no se tiene ese número entero de grupos, entonces se suele rellenar al final con ceros o con caracteres sin sentido.';

let encrypte = (text)=>{
	text = text.toUpperCase();
	text = text.replace(/A/g,4);
	text = text.replace(/E/g,3);
	text = text.replace(/I/g,1);
	text = text.replace(/O/g,0);
	text = text.replace(/U/g,5);
	return text;
};


app.get('/', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Aplicaciones en redes',
    title: 'Encriptacion',
    text1: texto1,
    text2: texto2,
    currentYear: new Date().getFullYear()
  });
});

app.get('/encriptado', (req, res) => {
  res.render('encrip.pug', {
    pageTitle: 'Aplicacion Encriptada',
    title: '3NCR1T4C10N',
    text1: encrypte(texto1),
    text2: encrypte(texto2),
    currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});