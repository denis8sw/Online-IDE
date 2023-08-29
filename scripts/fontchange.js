const selectFont = document.getElementById("selectfont")


selectFont.addEventListener("change", () => {
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

  localStorage.setItem("font", selectFont.value);
})


function getFont() {
    let theFont = localStorage.getItem("font")

    selectFont.value = theFont

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

if(localStorage.getItem("font", selectFont.value)) {
    getFont()
}