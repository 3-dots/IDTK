/*
Adobe In-Design Tool-Kit Extension V0.1.2 Beta (free version)
created by mim.Armand @ www.Armand.eu
Plugins website: 3Dots.fr/ID-ToolKit
Release date of this version:
14, July, 2014
 */

#targetengine "session"
var idtkFileToOpen = File('../IDTK/IDTK.jsxbin');
removeMenuIdtk();
if(idtkFileToOpen.exists){
	addMenuIdtk();
}
function addMenuIdtk(){
    var idtkScriptAction = app.scriptMenuActions.add("☢ - Robot !   ");
    var idtkEventListener = idtkScriptAction.eventListeners.add("onInvoke", callRobot, false);
    try{
    	var idtkScriptMenu = app.menus.item("$ID/Main").submenus.item("★ IDTK");
    	idtkScriptMenu.title;
    }
    catch (myError){
    	var idtkScriptMenu = app.menus.item("$ID/Main").submenus.add("★ IDTK");
    }
    var idtkScriptMenuItem = idtkScriptMenu.menuItems.add(idtkScriptAction);
}

function callRobot(){
	#target "InDesign";
	#targetengine 'MySessionScript';
	app.scriptPreferences.version = 8.0;
	try {
        app.doScript(idtkFileToOpen);
    } catch (err) {
        alert('You need to save your document before running the extension!\n\nOtherwise something else gone wrong!\nIf saving the document didn\'t solve the problem, please accept our apology for the inconvenient and let us know about the issue by providing the following information!\n\n\nError Details:\n' + err, 'Mayday, Mayday, Mayday!', true);
    }
}

function removeMenuIdtk(){
	try{
		app.scriptMenuActions.item("☢ - Robot !   ").remove();
	}
	catch(myError){}
	try{
		app.menus.item("$ID/Main").submenus.item("★ IDTK").remove();
	}
	catch(myError){}
}

