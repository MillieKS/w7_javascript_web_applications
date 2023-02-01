const NotesModel = require('./notesmodel.js');
const NotesView = require('./notesView')
// index.js is the main file
// it loads all the after dependancies (souirce files)


    const notesModel = new NotesModel();
    notesModel.addNote('this is an example note');
    const view = new NotesView(notesModel);

    view.displayNotes();
    // model.addNote('Go to the gym');

    // console.log(model.getNotes());

