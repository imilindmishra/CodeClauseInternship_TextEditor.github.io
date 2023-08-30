

function EnableEditMode(){
    TextField.document.designMode = 'on';
}

function execCmd(command,value=null){
    TextField.document.execCommand(command,false,value);
}
