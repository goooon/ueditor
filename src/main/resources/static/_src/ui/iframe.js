function displayNote(title){
    parent.displayDialog(title);
}

function displayDialog(title){
    editor = UE.getEditor('editor');
    editor.execCommand("displayNote",{title:title,editor:editor});
}