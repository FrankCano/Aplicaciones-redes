//servidor
const http=require("http");
const fs=require('fs');
const mod2=require('./modulo2');
const mod3=require('./modulo3');
const mod4=require('./modulo4');

const hostname='127.0.0.1'
const port=3001;

const server=http.createServer((req,res)=>{
	//res.write("Hola yorch");
	res.statusCode=200;
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.readFile('./index.html', (error,content)=>{
		res.write(content);
		res.write('<div class="col-xs-8" id="Notas"><label>'+mod2.valido[0]+" "+mod2.valido[1]+" "+mod2.valido[2]+" "+mod2.valido[3]+'</label></div> ');
		res.write('<div class="col-xs-4" ><label>Notas a promediar:</label></div>');
		res.write('<div class="col-xs-8" id="Notas a Considerar"><label>'+mod3.m3[0]+" "+mod3.m3[1]+" "+mod3.m3[2]+'</label></div>');
		res.write('<div class="col-xs-4" ><label>Promedio:</label></div>');
		res.write('<div class="col-xs-8" id="Promedio"><label>'+mod4.promedio+'</label></div>');
		//res.write("Notas: "+mod2.valido[0]+mod2.valido[1]+mod2.valido[2]+mod2.valido[3]);
		res.write('</div></body></html>');
		res.end();
	});
	//res.end();
});

server.listen(port,hostname,()=>{
	console.log("servidor corriendo en "+'http://{hostname}:${port}');
});