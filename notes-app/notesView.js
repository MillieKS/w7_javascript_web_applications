class NotesView {
    constructor(notesModel) {
    this.notesModel = notesModel
    this.mainContainerElement = document.querySelector('#main-container')
}

displayNotes() {
    const notes = this.notesModel.getNotes();
    notes.forEach( note => {
        const noteElement = document.createElement('div')
        noteElement.textContent = note
        noteElement.className = 'note'
        this.mainContainerElement.append(noteElement)
        
    })
}

}

module.exports = NotesView;