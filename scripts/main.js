const theExecute = document.getElementById("theexecute")
const theFrame = document.getElementById("theframe")

let textarea1 = document.getElementById('textarea1');



textarea1.value = "<h1 id ='theh'>Run Code</h1>"



theExecute.addEventListener("click", executeCode)

function executeCode() {
    const code = editor.getValue();
    const code2 = editor2.getValue();
    const code3 = editor3
    .getValue();


    const previewContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    ${code2}
    </style>
</head>
<body>
${code}

<script>
(function() {
    ${code3}
})();
</script>
</body>
</html>
            
    `;

    const previewDocument = theFrame.contentDocument;
    previewDocument.open();
    previewDocument.write(previewContent);
    previewDocument.close();

}

setTimeout(() => {
    executeCode()
}, 1);


editor.on("change", () => {
    if(autoRunOp == true) {
        executeCode()
    }
  });
  

  editor2.on("change", () => {
    if(autoRunOp == true) {
        executeCode()
    }
  });
  

  editor3.on("change", () => {
    if(autoRunOp == true) {
        executeCode()
    }
  });
  