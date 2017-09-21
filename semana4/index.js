const yargs = require('yargs')
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notas');

console.log("yorch otaku :v ");

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','Lists all the notes',{
	})
	.command('read','Read a note',{
		title: titleOptions
	})
	.command('remove','Elimina note',{
		title: titleOptions
	})
	.command('delete','delete all the notes',{
	})
	.help()
	.argv;

let command = argv._[0];

if (command === "add") {
	notes.addNote(argv.title,argv.body);
} else if (command === "list") {
	console.log("\n\t Notes: ");
	let allNotes = notes.getAll();
	allNotes.forEach(note => {
		notes.logNote(note);
	});
} else if (command === "read") {
	//console.log(command);
	let test = notes.getNote(argv.title);
	if (test){
		notes.logNote(test);
	}else{
		console.log("No hay ps");
	}
	
} else if (command === "delete") {
	notes.nDelete();
} else if (command == "remove") {
	console.log(command);
	notes.nRemove(argv.title)
}else{
	console.log("gg yorch otaku");
}