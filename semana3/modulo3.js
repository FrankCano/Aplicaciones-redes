console.log('Init modulo3');
const elim = require('./modulo2');

//var ar=[12,23,45,11];
//var minimo=Math.min(ar[0],ar[1],ar[2],ar[3]);

//console.log(minimo);

var minimo=Math.min(elim.valido[0],elim.valido[1],elim.valido[2],elim.valido[3]);
console.log("El minimo es: "+minimo);

const m3=new Array();
for(var i=0;i<4;i++){
	if (elim.valido[i]!=minimo) {
		//ingresa elementos al final del array 'm3'																							
		m3.push(elim.valido[i]);
		//console.log(m3);
	}
	if(i==3){
		module.exports={
			m3
		};
		for(var j=0;j<3;j++){
			console.log(m3[j]);
		}	
	}

}

