window.addEventListener("load", function() {
    document.body.style.backgroundColor = "lightblue";

    var paragraph = document.querySelector("p#second-paragraph");
    /*
    See "MDN HTML Element API"
    */
    console.log("Hello from the JavaScript console!");
    console.log(paragraph);
    paragraph.style.backgroundColor = "yellow";

    /**
     * Creates a button element and appends it to the <body> of the document
     * Append = add to the end of the list of child
     */
    var newButton = document.createElement("button");
    document.body.appendChild(newButton);

    // var myCodeMirror = CodeMirror(document.body, {
    //   value: "function myScript(){return 100;}\n",
    //   mode:  "javascript",
    //   viewportMargin: Infinity,
    // });
    var myTextArea = document.querySelector("textarea#codemirror-text-area");
    var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
      // value: "function myScript(){return 100;}\n",
      mode:  "javascript",
      viewportMargin: Infinity,
    });

    var handle = this.document.querySelector("#code-editor-handle");
    

    // handle.addEventListener("click", function() {
    //   console.log("The handle was clicked");
    //   codeEditorContainer.style.left = "150px";
    //   codeEditorContainer.style.top = "200px";
    // });
    var codeEditorContainer = document.querySelector("#code-editor-container");

    function addMovement(codeEditorContainer) {
      
      console.log(codeEditorContainer);
      var isMouseDown = false;
      var mousePosition;
      var offset = [0,0];

      codeEditorContainer.addEventListener("mousedown", function(event) {
        isMouseDown = true;
        console.log("1. User pressed down the mouse");
        offset = [
          codeEditorContainer.offsetLeft - event.clientX,
          codeEditorContainer.offsetTop - event.clientY
        ]
      });

      codeEditorContainer.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
          console.log("2. User moved the mouse");

          mousePosition = {
            x : event.clientX,
            y : event.clientY
          };
          codeEditorContainer.style.left = (mousePosition.x + offset[0]) + 'px';
          codeEditorContainer.style.top = (mousePosition.y + offset[1]) + 'px';
        }
      });

      codeEditorContainer.addEventListener("mouseup", function(event) {
        console.log("3. User lifted the mouse");
        isMouseDown = false;
      });
    }

    addMovement(codeEditorContainer);


    console.log(myCodeMirror);

    var addNewBtn = document.getElementById("addNewBtn");
    addNewBtn.onclick = function() {
      console.log("add new clicked!");

      var newContainer = document.createElement("div");
      var newHandle = document.createElement("div");
      var newTextArea = document.createElement("textarea");
      
      newContainer.id = "code-editor-container";
      newHandle.id = "code-editor-handle";
      newTextArea.id = "codemirror-text-area";

      // newContainer.style.position = "relative"
      newContainer.style.border = "solid black 1px";

      newContainer.appendChild(newHandle);
      newContainer.appendChild(newTextArea);

      var myCodeMirror = CodeMirror.fromTextArea(newTextArea, {
        mode:  "javascript",
        viewportMargin: Infinity,
      });

      
      document.body.appendChild(newContainer);
      addMovement(newContainer);
    }
  });  