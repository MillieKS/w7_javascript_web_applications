class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const paragraph = document.createElement('p')
    this.mainContainerEl.append(paragraph)
  }

  removeParagraph() {
    const deleteParagraph = document.querySelectorAll('p')
    deleteParagraph.forEach(paragraph => {
      paragraph.remove();
    });
  }
}

module.exports = View;