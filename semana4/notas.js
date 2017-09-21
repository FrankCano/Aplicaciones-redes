console.log("Init notas");

const fs = require('fs');

let fetchNotes = () => {
	try{
		let noteString = fs.readFileSync("notes-data.json");
		return JSON.parse(noteString);
	}catch(error){
		return [];
	}
}

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};

let addNote = (title,body) => {
	
	let notes = fetchNotes();
	
	let note = {
		title : title,
		body : body
	};

	let duplicatesNotes = notes.filter((n) => n.title === title );

	if(duplicatesNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
	}

};

let getAll =() =>{
	return fetchNotes();
};

let getNote = (title) =>{

	let notes = fetchNotes();

	let filteredNote = notes.filter(n => n.title === title);
	return filteredNote[0];
};

let logNote =(note) =>{
	console.log("\n------------------------");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

let nDelete =()=>{
	saveNotes();
}

let nRemove =(title)=>{
	let notes = fetchNotes();

	let filteredNote = notes.filter(n => n.title === title);
	let pos = notes.findIndex(n => n.title === title);
	
	if(pos != -1){
		notes.splice(pos,1);
		saveNotes(notes);
	}else{
		console.log("No encontrado");
	}
	
}

module.exports = {
	addNote,
	getAll,
	getNote,
	logNote,
	nDelete,
	nRemove
};