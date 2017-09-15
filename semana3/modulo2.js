console.log('Init modulo2');

const v_notas = require('./recibe');
//var list=[13,13,'ada',4]
const valido= new Array(4);

for(var i=0;i<4;i++){
	let v=v_notas.notas[i];
	//let v=list[i];	
	var c=0;
	if(typeof v=='string'){
		console.log("notas no valida: "+v);
		c++;
	}
	else{
		console.log('nota valida: '+v);
		valido[i]=v;	
	}

	if (i==3 && c==0) {
		module.exports={
			valido
		};
	}

}



//const valido = v_notas;

//console.log('tamaño: '+v_notas.notas.lenght);


