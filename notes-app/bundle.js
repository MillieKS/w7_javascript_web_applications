(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesmodel.js
  var require_notesmodel = __commonJS({
    "notesmodel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModel2) {
          this.notesModel = notesModel2;
          this.mainContainerElement = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.notesModel.getNotes();
          notes.forEach((note) => {
            const noteElement = document.createElement("div");
            noteElement.textContent = note;
            noteElement.className = "note";
            this.mainContainerElement.append(noteElement);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesmodel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  notesModel.addNote("this is an example note");
  var view = new NotesView(notesModel);
  view.displayNotes();
})();
