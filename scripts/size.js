

selectSize.addEventListener("change", () => {

    const max = parseInt(selectSize.getAttribute("max"));
    if (parseInt(selectSize.value) > max) {
        selectSize.value = max;
    }

    const min = parseInt(selectSize.getAttribute("min"));
    if (parseInt(selectSize.value) < min) {
        selectSize.value = min;
    }

    styleElement.textContent = `
  .CodeMirror {
    font-family: ${selectFont.value};
    font-size: ${selectSize.value + "px"};
  }
`;


setTimeout(() => {
  editor.refresh()
  editor2.refresh()
  editor3.refresh()
}, 100);

    localStorage.setItem("fontsize", selectSize.value);
})



function getSize() {
    let theSize = localStorage.getItem("fontsize")

    selectSize.value = theSize

    styleElement.textContent = `
    .CodeMirror {
      font-family: ${selectFont.value};
      font-size: ${selectSize.value + "px"};
    }
  `;

  setTimeout(() => {
    editor.refresh()
    editor2.refresh()
    editor3.refresh()
  }, 100);

}

if (localStorage.getItem("fontsize", selectFont.value)) {
    getSize()
}
