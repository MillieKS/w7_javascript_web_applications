/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('NoteView', () => {
    it('returns all the notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesModel = new NotesModel();
        const notesView = new NotesView(notesModel);
      

        notesModel.addNote('this is a note');
        notesView.displayNotes();

        expect( document.querySelectorAll('div.note').length).toEqual(1)
    })
})