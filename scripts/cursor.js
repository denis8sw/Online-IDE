const selectCursor = document.getElementById("selectcursor")
const theCursor = document.getElementById("thecursor")

theCursor.disabled = true;

selectCursor.addEventListener("change", () => {
    switch (selectCursor.value) {
        case "cursor1":
            theCursor.disabled = true;
            localStorage.setItem("cursor1", "on")
            localStorage.removeItem("cursor2")
            break;
        case "cursor2":
            theCursor.disabled = false;
            localStorage.removeItem("cursor1")
            localStorage.setItem("cursor2", "on")
            break;
    }
})

function getCursor() {
    if(localStorage.getItem("cursor1")) {
        theCursor.disabled = true;
        selectCursor.value = "cursor1"
    } else if(localStorage.getItem("cursor2"))  {
        theCursor.disabled = false;
        selectCursor.value = "cursor2"
    }
}


getCursor()


