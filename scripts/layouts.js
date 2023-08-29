const divCodeWrapper3 = document.getElementById("divCodeWrapper3")
const layoutB = document.getElementById("layoutb")
const layoutD = document.getElementById("layoutd")
const layoutT = document.getElementById("layoutt")
const theImp = document.getElementById("theimp")
const theImp2 = document.getElementById("theimp2")
const theTabs = document.getElementById("thetabs")
const theSave = document.querySelector(".abracad")
const saveOpt = document.getElementById("smth")

const supportX = document.querySelector(".supportx")
const main6 = document.querySelector(".main6")
const main = document.querySelector(".main")
const navbar = document.querySelector(".navbar")

navbar.style.display = "none"

theMainC.style.display = "none"
theTabs.style.display = "none"

theTabs.classList.add("delete")

let lol23x0;

theSave.addEventListener("click", () => {
    dwaj9uix9iaw2()
    saveOpt.style.fontSize = "16px"
    saveOpt.innerText = "@support me to keep this project alive"
})

supportX.addEventListener("click", () => {
    if (!x.matches) {
        main6.style.display = "none"
        navbar.style.display = ""
        theMainC.style.display = ""

        editor.refresh()
        editor2.refresh()
        editor3.refresh()

        lol23x0 = setInterval(dwaj9uix9iaw2, 10 * 60 * 1000)

        theTabs.classList.remove("delete")

        if (localStorage.getItem("thelayout", "tabs")) {
            if (!theTabs.classList.contains("delete")) {


                theTabs.classList.add("check")

                theMainC.style.display = "none"
                theTabs.style.display = ""

                theTabs.appendChild(divCodeWrapper)
                divCodeWrapper.style.border = "0px"
                divCodeWrapper.style.width = "100%"

                appendStyle.textContent = `
                .CodeMirror {
                    height: 750px;
                  }
            `;
            }
        }
    } else {
        saveOpt.style.fontSize = "16px"
        saveOpt.innerText = "@lower resolution detected !"
    }

})

function dwaj9uix9iaw2() {
    main6.style.display = ""
    navbar.style.display = "none"
    theMainC.style.display = "none"
    theTabs.style.display = "none"

    theTabs.classList.add("delete")

    saveOpt.style.fontSize = "0px"
    saveOpt.innerText = ""

    setTimeout(() => {
        clearInterval(lol23x0)
    }, 1);
}


var x = window.matchMedia("(max-width: 1148px)")

const appendStyle = document.createElement("style")
document.head.appendChild(appendStyle);

appendStyle.textContent = `
.CodeMirror {
    height: ${theheight};
  }
`;



layoutB.addEventListener("click", () => {

    divCodeWrapper.style.height = ""
    divCodeWrapper2.style.height = ""
    divCodeWrapper3.style.height = ""
    divCodeWrapper4.style.height = ""

    localStorage.removeItem("thelayout", "tabs")

    if (theTabs.classList.contains("check")) {
        theMainC.style.display = ""
        theTabs.style.display = "none"

        divCodeWrapper.style.display = ""
        divCodeWrapper2.style.display = ""
        divCodeWrapper3.style.display = ""
        divCodeWrapper4.style.display = ""

        theImp.appendChild(divCodeWrapper)
        theImp.appendChild(divCodeWrapper2)

        theImp.appendChild(divCodeWrapper3)

        theImp2.appendChild(divCodeWrapper4)

        divCodeWrapper.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper.style.width = "800px"

        divCodeWrapper2.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper2.style.width = "800px"

        divCodeWrapper3.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper3.style.width = "800px"

        divCodeWrapper4.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper4.style.width = "100%"



        setTimeout(() => {
            editor.refresh()
            editor2.refresh()
            editor3.refresh()
        }, 1);


    }

    appendStyle.textContent = `
    .CodeMirror {
        height: ${theheight};
      }
`;

    theImp.style.display = ""
    theImp2.style.display = ""
    theMainC.style.display = ""

    theTabs.style.display = "none"


    executeCode()

    theImp.appendChild(divCodeWrapper3)

    divCodeWrapper4.style.width = "100%"
    divCodeWrapper4.style.height = "430px"

    localStorage.setItem("layout", "bottom")
    localStorage.removeItem("layout2", "default")


    theTabs.classList.remove("check")


})

if (localStorage.getItem("layout", "bottom")) {
    theImp.appendChild(divCodeWrapper3)

    divCodeWrapper4.style.width = "100%"
    divCodeWrapper4.style.height = "430px"

    localStorage.setItem("layout", "bottom")
}


layoutD.addEventListener("click", () => {

    divCodeWrapper.style.height = ""
    divCodeWrapper2.style.height = ""
    divCodeWrapper3.style.height = ""
    divCodeWrapper4.style.height = ""

    localStorage.removeItem("thelayout", "tabs")

    if (theTabs.classList.contains("check")) {
        theMainC.style.display = ""
        theTabs.style.display = "none"

        divCodeWrapper.style.display = ""
        divCodeWrapper2.style.display = ""
        divCodeWrapper3.style.display = ""
        divCodeWrapper4.style.display = ""

        theImp.appendChild(divCodeWrapper)
        theImp.appendChild(divCodeWrapper2)

        theImp2.appendChild(divCodeWrapper3)


        theImp2.appendChild(divCodeWrapper4)

        divCodeWrapper.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper.style.width = "800px"

        divCodeWrapper2.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper2.style.width = "800px"

        divCodeWrapper3.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper3.style.width = "800px"

        divCodeWrapper4.style.border = "2px solid rgb(88, 88, 88)"
        divCodeWrapper4.style.width = "800px"



        setTimeout(() => {
            editor.refresh()
            editor2.refresh()
            editor3.refresh()
        }, 1);


    }

    appendStyle.textContent = `
    .CodeMirror {
        height: ${theheight};
      }
`;

    theImp.style.display = ""
    theImp2.style.display = ""
    theMainC.style.display = ""

    theTabs.style.display = "none"



    if (!theTabs.classList.contains("check")) {
        theImp2.appendChild(divCodeWrapper3)


        theImp2.appendChild(divCodeWrapper4)

    }





    executeCode()

    divCodeWrapper4.style.width = "800px"

    divCodeWrapper4.style.height = ""

    localStorage.setItem("layout2", "default")
    localStorage.removeItem("layout", "bottom")

    theTabs.classList.remove("check")


})


layoutT.addEventListener("click", () => {

    theTabs.style.width = rangeInp.value + "px"

    localStorage.setItem("thelayout", "tabs")
    localStorage.removeItem("layout", "bottom")
    localStorage.removeItem("layout2", "default")

    localStorage.removeItem("current4", "result")
    localStorage.removeItem("current", "html")
    localStorage.removeItem("current2", "css")
    localStorage.removeItem("current3", "js")

    theTabs.classList.add("check")

    theMainC.style.display = "none"
    theTabs.style.display = ""

    theTabs.appendChild(divCodeWrapper)
    divCodeWrapper.style.border = "0px"
    divCodeWrapper.style.width = "100%"

    appendStyle.textContent = `
    .CodeMirror {
        height: 750px;
      }
`;

    divCodeWrapper.style.display = ""

    divCodeWrapper2.style.display = "none"
    divCodeWrapper3.style.display = "none"
    divCodeWrapper4.style.display = "none"

    theTabs.appendChild(divCodeWrapper)

    divCodeWrapper.style.border = "0px"
    divCodeWrapper.style.width = "100%"

    if (rangeInp.value <= 1341) {
        divCodeWrapper.style.height = "600px"
        divCodeWrapper2.style.height = "600px"
        divCodeWrapper3.style.height = "600px"
        divCodeWrapper4.style.height = "600px"
    } else {
        divCodeWrapper.style.height = "750px"
        divCodeWrapper2.style.height = "750px"
        divCodeWrapper3.style.height = "750px"
        divCodeWrapper4.style.height = "750px"
    }


    setTimeout(() => {
        editor.refresh()
        editor2.refresh()
        editor3.refresh()
    }, 1);
})

const theHtml = document.getElementById("thehtml")
const theCss = document.getElementById("thecss")
const theJs = document.getElementById("thejs")
const theResult = document.getElementById("theresult")

theHtml.addEventListener("click", () => {

    localStorage.setItem("current", "html")

    localStorage.removeItem("current2", "css")
    localStorage.removeItem("current3", "js")
    localStorage.removeItem("current4", "result")


    divCodeWrapper.style.display = ""

    divCodeWrapper2.style.display = "none"
    divCodeWrapper3.style.display = "none"
    divCodeWrapper4.style.display = "none"

    theTabs.appendChild(divCodeWrapper)

    divCodeWrapper.style.border = "0px"
    divCodeWrapper.style.width = "100%"

    setTimeout(() => {
        editor.refresh()
        editor2.refresh()
        editor3.refresh()
    }, 1);
})



theCss.addEventListener("click", () => {

    localStorage.setItem("current2", "css")

    localStorage.removeItem("current", "html")
    localStorage.removeItem("current3", "js")
    localStorage.removeItem("current4", "result")

    divCodeWrapper2.style.display = ""

    divCodeWrapper.style.display = "none"
    divCodeWrapper3.style.display = "none"
    divCodeWrapper4.style.display = "none"

    theTabs.appendChild(divCodeWrapper2)

    divCodeWrapper2.style.border = "0px"
    divCodeWrapper2.style.width = "100%"

    setTimeout(() => {
        editor.refresh()
        editor2.refresh()
        editor3.refresh()
    }, 1);

})

theJs.addEventListener("click", () => {

    localStorage.setItem("current3", "js")

    localStorage.removeItem("current", "html")
    localStorage.removeItem("current2", "css")
    localStorage.removeItem("current4", "result")

    divCodeWrapper3.style.display = ""

    divCodeWrapper2.style.display = "none"
    divCodeWrapper.style.display = "none"
    divCodeWrapper4.style.display = "none"

    theTabs.appendChild(divCodeWrapper3)

    divCodeWrapper3.style.border = "0px"
    divCodeWrapper3.style.width = "100%"

    setTimeout(() => {
        editor.refresh()
        editor2.refresh()
        editor3.refresh()
    }, 1);

})

theResult.addEventListener("click", () => {

    localStorage.setItem("current4", "result")
    localStorage.removeItem("current", "html")
    localStorage.removeItem("current2", "css")
    localStorage.removeItem("current3", "js")

    divCodeWrapper4.style.display = ""

    divCodeWrapper2.style.display = "none"
    divCodeWrapper.style.display = "none"
    divCodeWrapper3.style.display = "none"

    theTabs.appendChild(divCodeWrapper4)

    divCodeWrapper4.style.border = "0px"
    divCodeWrapper4.style.width = "100%"


    if (rangeInp.value <= 1341) {
        divCodeWrapper4.style.height = "600px"
    } else {
        divCodeWrapper4.style.height = "750px"
    }


    executeCode()

})

if (localStorage.getItem("thelayout", "tabs")) {
    if (!theTabs.classList.contains("delete")) {


        theTabs.classList.add("check")

        theMainC.style.display = "none"
        theTabs.style.display = ""

        theTabs.appendChild(divCodeWrapper)
        divCodeWrapper.style.border = "0px"
        divCodeWrapper.style.width = "100%"

        appendStyle.textContent = `
    .CodeMirror {
        height: 750px;
      }
`;
    }
}



if (localStorage.getItem("layout2", "default")) {
    theImp2.appendChild(divCodeWrapper3)


    theImp2.appendChild(divCodeWrapper4)

    executeCode()

    divCodeWrapper4.style.width = "800px"

    divCodeWrapper4.style.height = ""

}

if (theTabs.classList.contains("check")) {
    if (localStorage.getItem("current", "html")) {
        divCodeWrapper.style.display = ""

        divCodeWrapper2.style.display = "none"
        divCodeWrapper3.style.display = "none"
        divCodeWrapper4.style.display = "none"

        theTabs.appendChild(divCodeWrapper)

        divCodeWrapper.style.border = "0px"
        divCodeWrapper.style.width = "100%"

        setTimeout(() => {
            editor.refresh()
            editor2.refresh()
            editor3.refresh()
        }, 1);
    } else if (localStorage.getItem("current2", "css")) {
        divCodeWrapper2.style.display = ""

        divCodeWrapper.style.display = "none"
        divCodeWrapper3.style.display = "none"
        divCodeWrapper4.style.display = "none"

        theTabs.appendChild(divCodeWrapper2)

        divCodeWrapper2.style.border = "0px"
        divCodeWrapper2.style.width = "100%"

        setTimeout(() => {
            editor.refresh()
            editor2.refresh()
            editor3.refresh()
        }, 1);
    } else if (localStorage.getItem("current3", "js")) {
        divCodeWrapper3.style.display = ""

        divCodeWrapper2.style.display = "none"
        divCodeWrapper.style.display = "none"
        divCodeWrapper4.style.display = "none"

        theTabs.appendChild(divCodeWrapper3)

        divCodeWrapper3.style.border = "0px"
        divCodeWrapper3.style.width = "100%"

        setTimeout(() => {
            editor.refresh()
            editor2.refresh()
            editor3.refresh()
        }, 1);
    } else if (localStorage.getItem("current4", "result")) {
        divCodeWrapper4.style.display = ""

        divCodeWrapper2.style.display = "none"
        divCodeWrapper.style.display = "none"
        divCodeWrapper3.style.display = "none"

        theTabs.appendChild(divCodeWrapper4)

        divCodeWrapper4.style.border = "0px"
        divCodeWrapper4.style.width = "100%"
        divCodeWrapper4.style.height = "100%"

        executeCode()
    }
}



rangeInp.addEventListener("input", () => {
    if (!theTabs.classList.contains("check")) {
        appendStyle.textContent = `
        .CodeMirror {
            height: ${theheight} !important;
          }
    `;
    }
})



if (theTabs.classList.contains("check")) {
    theTabs.style.width = rangeInp.value + "px"

    if (theTabs.classList.contains("check")) {
        theTabs.style.width = rangeInp.value + "px"

        if (rangeInp.value <= 1341) {
            divCodeWrapper.style.height = "600px"
            divCodeWrapper2.style.height = "600px"
            divCodeWrapper3.style.height = "600px"
            divCodeWrapper4.style.height = "600px"
        } else {
            divCodeWrapper.style.height = "750px"
            divCodeWrapper2.style.height = "750px"
            divCodeWrapper3.style.height = "750px"
            divCodeWrapper4.style.height = "750px"
        }
    }

}


rangeInp.addEventListener("input", () => {
    if (theTabs.classList.contains("check")) {
        theTabs.style.width = rangeInp.value + "px"

        if (rangeInp.value <= 1341) {
            divCodeWrapper.style.height = "600px"
            divCodeWrapper2.style.height = "600px"
            divCodeWrapper3.style.height = "600px"
            divCodeWrapper4.style.height = "600px"
        } else {
            divCodeWrapper.style.height = "750px"
            divCodeWrapper2.style.height = "750px"
            divCodeWrapper3.style.height = "750px"
            divCodeWrapper4.style.height = "750px"
        }
    }

})