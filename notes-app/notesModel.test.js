const NotesModel = require('./notesmodel.js')

describe('NotesModel', () => {
    it('returns an empty array when call getNotes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([])
    })

    it('return notes once added a note', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        expect(model.getNotes()).toEqual(['Buy milk'])
    })

    it('return notes once added a note', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })

    it('return notes once added a note', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([])
    })
})





