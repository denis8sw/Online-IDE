const selectStyle = document.getElementById("selectstyle")
let autoSaveOp = true;
let autoRunOp = false;

const editor = CodeMirror.fromTextArea(document.getElementById("textarea1"), {
    mode: "xml",
    theme: selectStyle.value,
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    scrollbarStyle: "native",
    extraKeys: { "Ctrl-Space": "autocomplete" },
    search: true,
    hintOptions: { hint: CodeMirror.hint.html }
});



const editor2 = CodeMirror.fromTextArea(document.getElementById("textarea2"), {
    mode: "css",
    theme: selectStyle.value,
    lineNumbers: true,
    search: true,
    autoCloseBrackets: true,
    lint: {
        // Specify the linting function to use for CSS
        lintWith: CodeMirror.lint.css,
      },
    extraKeys: { "Ctrl-Space": "autocomplete" },
    hintOptions: { hint: CodeMirror.hint.css }
});





const editor3 = CodeMirror.fromTextArea(document.getElementById("textarea3"), {
    mode: "javascript",
    theme: selectStyle.value,
    lineNumbers: true,
    autoCloseBrackets: true,
    search: true,
    autoCloseBrackets: true,
    lint: {
        // Specify the linting function to use for CSS
        lintWith: CodeMirror.lint.javascript,
      },
    extraKeys: { "Ctrl-Space": "autocomplete" },
    hintOptions: { hint: CodeMirror.hint.javascript }
});

editor.addKeyMap({
    "Ctrl-F": function(cm) {
      // Prevent the default behavior (browser find)
      cm.execCommand("findPersistent");
      console.log("Custom find");
    },
    "Ctrl-S": function(cm) {
      executeCode()
    }
  });


  editor2.addKeyMap({
    "Ctrl-F": function(cm) {
      // Prevent the default behavior (browser find)
      cm.execCommand("findPersistent");
      console.log("Custom find");
    },
    "Ctrl-S": function(cm) {
      executeCode()
    }
  });

  editor3.addKeyMap({
    "Ctrl-F": function(cm) {
      // Prevent the default behavior (browser find)
      cm.execCommand("findPersistent");
      console.log("Custom find");
    },
    "Ctrl-S": function(cm) {
      executeCode()
    }
  });






selectStyle.addEventListener("change", () => {
    editor.setOption("theme", selectStyle.value);
    editor2.setOption("theme", selectStyle.value);
    editor3.setOption("theme", selectStyle.value);

    localStorage.setItem("theme", selectStyle.value)

});

function setTheme() {
    const theTheme = localStorage.getItem("theme")

    selectStyle.value = theTheme

    editor.setOption("theme", selectStyle.value);
    editor2.setOption("theme", selectStyle.value);
    editor3.setOption("theme", selectStyle.value);
}

if(localStorage.getItem("theme", selectStyle.value)) {
    setTheme()
}






editor.setValue("<h1 id ='theh'>Run Code</h1>");
editor2.setValue("body {\n  background-color: white;\n} \n\nh1 {\n  color: black;\n}");
editor3.setValue("const theH = document.getElementById('theh')");


const styleElement = document.createElement("style");

const selectSize = document.getElementById("selectsize")

// Set the CSS content with the desired styles

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);



// Save content to local storage whenever it changes
editor.on("change", () => {
  const content = editor.getValue();
  if(autoSaveOp == true) {
    localStorage.setItem("editorContent", content);
  }
});

editor2.on("change", () => {
    const content = editor2.getValue();
    if(autoSaveOp == true) {
      localStorage.setItem("editorContent2", content);
    }
  });
  
editor3.on("change", () => {
    const content = editor3.getValue();
    if(autoSaveOp == true) {
      localStorage.setItem("editorContent3", content);
    }
  });
  


function check() {
    if(localStorage.getItem("editorContent")) {
        const content = localStorage.getItem("editorContent")
        editor.setValue(content)
    }
    if(localStorage.getItem("editorContent2")) {
        const content2 = localStorage.getItem("editorContent2")
        editor2.setValue(content2)
    }
    if(localStorage.getItem("editorContent3")) {
        const content3 = localStorage.getItem("editorContent3")
        editor3.setValue(content3)
    }
}

check()


setTimeout(() => {
  editor.refresh()
  editor2.refresh()
  editor3.refresh()
}, 100);