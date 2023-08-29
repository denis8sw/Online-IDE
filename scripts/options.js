const animSelect = document.getElementById("animselect")
const video1 = document.getElementById("video1")
const optionIcon = document.getElementById("optionicon")
const theSettings = document.getElementById("thesettings")
const closeSett = document.getElementById("closesett")

let resetId = true;

theSettings.style.display = "none"
closeSett.style.display = "none"


optionIcon.addEventListener("click", openSettings)

function openSettings() {
    theSettings.style.display = ""
    closeSett.style.display = ""

    theSettings.style.opacity = "0"
    theSettings.style.transition = "all 0.6s"

    setTimeout(() => {
        theSettings.style.opacity = "1"
        optionIcon.removeEventListener("click", openSettings)
    }, 100);
}

closeSett.addEventListener("click", closeSettingsF)

function closeSettingsF() {
    theSettings.style.opacity = "1"
    closeSett.style.display = "none"
    setTimeout(() => {
        theSettings.style.opacity = "0"

    }, 100);

    setTimeout(() => {
        theSettings.style.display = "none"
        optionIcon.addEventListener("click", openSettings)
    }, 600);
}


const theBody = document.querySelector("body")
const colorInp = document.getElementById("colorinp")

const resetBtn = document.getElementById("resetbtn")

colorInp.value = "#0d0d0e"

colorInp.addEventListener("input", () => {
    theBody.style.backgroundColor = colorInp.value

    localStorage.setItem("backcolor", colorInp.value)

})

if (localStorage.getItem("backcolor", colorInp.value)) {
    theBody.style.backgroundColor = localStorage.getItem("backcolor")
    colorInp.value = localStorage.getItem("backcolor")
}

resetBtn.addEventListener("click", () => {
    localStorage.setItem("custom2", "anim")

    if (resetId == true) {
        localStorage.removeItem("backcolor")
        colorInp.value = "#0d0d0e"
        theBody.style.backgroundColor = colorInp.value
    } else {
        animSelect.value = "Night Car"
        video1.src = "video/Untitled.mp4"
        localStorage.removeItem("namevideo", animSelect.value)
    }
})



const autoSave = document.getElementById("autosave")
const theHints = document.getElementById("thehints")
const lineNumbers = document.getElementById("linenumbers")
const autoBrackets = document.getElementById("autobrackets")
const autoRun = document.getElementById("autorun")

const keySound = document.getElementById("keysound")

let audioEnable = false;

keySound.addEventListener("change", () => {
    if (keySound.checked == true) {
        audioEnable = true;
        localStorage.setItem("keysound", true)
        localStorage.removeItemItem("keysound2", false)
    } else {
        audioEnable = false;
        localStorage.setItem("keysound2", false)
        localStorage.removeItem("keysound", true)
    }
})

if (localStorage.getItem("keysound", true)) {
    keySound.checked = true
    audioEnable = true;
} else {
    keySound.checked == false
    audioEnable = false;
}

autoSave.checked = true;
theHints.checked = true;
lineNumbers.checked = true;
autoBrackets.checked = true;


theHints.addEventListener("change", () => {
    if (theHints.checked == true) {
        editor.setOption("hintOptions", { hint: CodeMirror.hint.html });
        editor2.setOption("hintOptions", { hint: CodeMirror.hint.css });
        editor3.setOption("hintOptions", { hint: CodeMirror.hint.javascript });

        localStorage.setItem("hints", true)
        localStorage.removeItem("hints2", false)
    } else {
        editor.setOption("hintOptions", { hint: false });
        editor2.setOption("hintOptions", { hint: false });
        editor3.setOption("hintOptions", { hint: false });

        localStorage.setItem("hints2", false)
        localStorage.removeItem("hints", true)
    }
})

if (localStorage.getItem("hints", true)) {
    theHints.checked = true

    editor.setOption("hintOptions", { hint: CodeMirror.hint.html });
    editor2.setOption("hintOptions", { hint: CodeMirror.hint.css });
    editor3.setOption("hintOptions", { hint: CodeMirror.hint.javascript });
} else if (localStorage.getItem("hints2", false)) {
    theHints.checked = false

    editor.setOption("hintOptions", { hint: false });
    editor2.setOption("hintOptions", { hint: false });
    editor3.setOption("hintOptions", { hint: false });
}


lineNumbers.addEventListener("change", () => {
    if (lineNumbers.checked == true) {
        editor.setOption("lineNumbers", true);
        editor2.setOption("lineNumbers", true);
        editor3.setOption("lineNumbers", true);

        localStorage.setItem("lineNumbers", true)
        localStorage.removeItem("lineNumbers2", false)
    } else {
        editor.setOption("lineNumbers", false);
        editor2.setOption("lineNumbers", false);
        editor3.setOption("lineNumbers", false);

        localStorage.setItem("lineNumbers2", false)
        localStorage.removeItem("lineNumbers", true)
    }
})


if (localStorage.getItem("lineNumbers", true)) {
    lineNumbers.checked = true
    editor.setOption("lineNumbers", true);
    editor2.setOption("lineNumbers", true);
    editor3.setOption("lineNumbers", true);
} else if (localStorage.getItem("lineNumbers2", false)) {
    lineNumbers.checked = false
    editor.setOption("lineNumbers", false);
    editor2.setOption("lineNumbers", false);
    editor3.setOption("lineNumbers", false);
}


autoBrackets.addEventListener("change", () => {
    if (autoBrackets.checked == true) {
        editor.setOption("autoCloseBrackets", true);
        editor2.setOption("autoCloseBrackets", true);
        editor3.setOption("autoCloseBrackets", true);

        localStorage.setItem("autoBrackets", true)
        localStorage.removeItem("autoBrackets2", false)

    } else {
        editor.setOption("autoCloseBrackets", false);
        editor2.setOption("autoCloseBrackets", false);
        editor3.setOption("autoCloseBrackets", false);

        localStorage.setItem("autoBrackets2", false)
        localStorage.removeItem("autoBrackets", true)
    }
})

if (localStorage.getItem("autoBrackets", true)) {
    autoBrackets.checked = true

    editor.setOption("autoCloseBrackets", true);
    editor2.setOption("autoCloseBrackets", true);
    editor3.setOption("autoCloseBrackets", true);
} else if (localStorage.getItem("autoBrackets2", false)) {
    autoBrackets.checked = false

    editor.setOption("autoCloseBrackets", false);
    editor2.setOption("autoCloseBrackets", false);
    editor3.setOption("autoCloseBrackets", false);
}



autoSave.addEventListener("change", () => {
    if (autoSave.checked == true) {
        autoSaveOp = true;
        localStorage.setItem("autosave", true)
        localStorage.removeItem("autosave2", false)
    } else {
        autoSaveOp = false;
        localStorage.removeItem("autosave", false)
        localStorage.setItem("autosave2", true)
    }
})

autoRun.checked = false

autoRun.addEventListener("change", () => {
    if (autoRun.checked == true) {
        autoRunOp = true;
        executeCode()
        localStorage.setItem("autorun", true)
        localStorage.removeItem("autorun2", false)
    } else {
        autoRunOp = false;
        localStorage.setItem("autorun2", false)
        localStorage.removeItem("autorun", true)
    }
})


if (localStorage.getItem("autorun", true)) {
    autoRunOp = true;
    autoRun.checked = true
} else if (localStorage.getItem("autorun2", false)) {
    autoRunOp = false;
    autoRun.checked = false
}

if (localStorage.getItem("autosave", true)) {
    autoSaveOp = true;
    autoSave.checked = true
} else if (localStorage.getItem("autosave2", false)) {
    autoSaveOp = false;
    autoSave.checked = false
}


const backSelect = document.getElementById("backselect")
const theBodyC = document.getElementById("thebodyc")

const theSelect2 = document.getElementById("theselect2")



video1.style.display = "none"

animSelect.style.display = "none"



backSelect.addEventListener("change", () => {
    if (backSelect.value == "op1") {
        
        localStorage.setItem("custom", "checked")

        colorInp.style.display = ""
        theBodyC.style.display = ""
        animSelect.style.display = "none"

        video1.style.display = "none"

        resetId = true;

        localStorage.removeItem("backvideo", true)

    } else {
        localStorage.setItem("custom", "checked")
        colorInp.style.display = "none"
        theBodyC.style.display = "none"
        animSelect.style.display = ""

        video1.style.display = ""

        localStorage.setItem("backvideo", true)

        resetId = false;
    }
})



if (localStorage.getItem("backvideo", true)) {
    backSelect.value = "op2"
    colorInp.style.display = "none"
    theBodyC.style.display = "none"
    animSelect.style.display = ""

    video1.style.display = ""

    resetId = false;

} else {
    backSelect.value = "op1"
    colorInp.style.display = ""
    theBodyC.style.display = ""
    animSelect.style.display = "none"

    video1.style.display = "none"

    resetId = true;

}


animSelect.addEventListener("change", () => {
    if (animSelect.value == "Night Car") {
        video1.src = "video/Untitled.mp4"

        localStorage.setItem("custom2", "anim")

        localStorage.setItem("video", video1.src)
        localStorage.setItem("namevideo", animSelect.value)

    } else if (animSelect.value == "Ocean") {
        video1.src = "video/2.mp4"


        localStorage.setItem("custom2", "anim")

        localStorage.setItem("video", video1.src)
        localStorage.setItem("namevideo", animSelect.value)
    }
})

if (localStorage.getItem("video", 1)) {
    video1.src = localStorage.getItem("video", 1)
}

if (localStorage.getItem("namevideo", animSelect.value)) {
    animSelect.value = localStorage.getItem("namevideo", animSelect.value)
}


const rangeInp = document.getElementById("rangeinp")
const theMainC = document.getElementById("themainc")
const heightStyle = document.createElement("style")

document.head.appendChild(heightStyle)

let theheight;
let thewidth;

const divCodeWrapper4 = document.getElementById("divCodeWrapper4")

rangeInp.addEventListener("input", () => {
    theMainC.style.width = rangeInp.value + "px"

    thewidth = rangeInp.value + "px"



    localStorage.setItem("size", rangeInp.value)

    if (rangeInp.value <= 1341) {
        theheight = "300px"
        heightStyle.textContent = `
        .CodeMirror {
            height: ${theheight};

          }
  `;
    } else {
        theheight = "370px"
        heightStyle.textContent = `
        .CodeMirror {
            height: ${theheight};
          }
  `;

    }
    localStorage.setItem("firstheight", theheight)
})

if (localStorage.getItem("size", rangeInp.value)) {
    theMainC.style.width = localStorage.getItem("size", rangeInp.value) + "px"
    rangeInp.value = localStorage.getItem("size", rangeInp.value)
}

if (localStorage.getItem("firstheight")) {
    heightStyle.textContent = `
        .CodeMirror {
            height: ${localStorage.getItem("firstheight")};
          }
  `;
}

thewidth = rangeInp.value + "px"





function selectElement(id, valueToSelect) {

    video1.style.display = ""
    video1.src = "video/2.mp4"

    let element = document.getElementById(id);
    element.value = valueToSelect;

    colorInp.style.display = "none"
    theBodyC.style.display = "none"
    animSelect.style.display = ""

    video1.style.display = ""

    localStorage.setItem("backvideo", true)

    resetId = false;
}

if (!(localStorage.getItem("custom", "checked") || localStorage.getItem("custom2", "anim"))) {
    selectElement('backselect', 'op2');
    animSelect.value = "Ocean"
}

