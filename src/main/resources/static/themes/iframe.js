function displayNote(title){
    parent.displayDialog(title);
}

function updateSVG(element){
    console.log("updateSVG");
    parent.updateSVGDialog(element);
}

function displayDialog(title){
    editor = UE.getEditor('editor');
    editor.execCommand("displayNote",{title:title,editor:editor});
}
function updateSVGDialog(element){
    editor = UE.getEditor('editor');
    editor.execCommand("updateSvg",{element:element,editor:editor})
}