//modulo que calcula el promedio
console.log('Init modulo4');
const m4 = require('./modulo3');

var sum=0;
for(var i=0;i<3;i++){
	sum=sum+m4.m3[i];
	
	if(i==2){
		const promedio=sum/3;
		console.log("El promedio del alumno es:"+promedio);
		module.exports={
			promedio
		};
	}
}
