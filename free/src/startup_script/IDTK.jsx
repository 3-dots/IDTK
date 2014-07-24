/*
Adobe In-Design Tool-Kit Extension V0.1.2 Beta (free version)
created by mim.Armand @ www.Armand.eu
Plugins website: 3Dots.fr/ID-ToolKit
Release date of this version:
14, July, 2014
 */

#targetengine "session"
var robotFileToOpen = File('../IDTK/ROBOT/robot.jsxbin');
var datanFileToOpen = File('../IDTK/DATAN/datan.jsxbin');
removeMenuIdtk();
if(robotFileToOpen.exists){
	addMenuIdtk();
}
function addMenuIdtk(){
    var robotCall = app.scriptMenuActions.add("☢ - Robot !   ");
    var datanCall = app.scriptMenuActions.add("∞ - DataN !   ");
    var robotEventListener = robotCall.eventListeners.add("onInvoke", callRobot, false);
    var datanEventListener = datanCall.eventListeners.add("onInvoke", callDatan, false);
    try{
    	var idtkScriptMenu = app.menus.item("$ID/Main").submenus.item("★ IDTK");
    	idtkScriptMenu.title;
    }
    catch (myError){
    	var idtkScriptMenu = app.menus.item("$ID/Main").submenus.add("★ IDTK");
    }
    var idtkScriptMenuItem = idtkScriptMenu.menuItems.add(robotCall);
    var idtkScriptMenuItem = idtkScriptMenu.menuItems.add(datanCall);
}

function callRobot(){
	#target "InDesign";
	#targetengine 'MySessionScript';
	app.scriptPreferences.version = 8.0;
	try {
        app.doScript(robotFileToOpen, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.ENTIRE_SCRIPT, "IDTK ☢ Robot!");
    } catch (err) {
        alert('You need to save your document before running the extension!\n\n\nIf saving the document didn\'t solve the problem, please accept our apology for the inconvenient and let us know about the issue by providing the following information!\n\n\nError Details:\n' + err, 'Mayday, Mayday, Mayday!', false);
    }
}
function callDatan(){
    #target "InDesign";
    #targetengine 'MySessionScript';
    app.scriptPreferences.version = 8.0;
    try {
        app.doScript(datanFileToOpen, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.ENTIRE_SCRIPT, "IDTK ∞ DataN!");
    } catch (err) {
        alert('You need to save your document before running the extension!\n\nIf saving the document didn\'t solve the problem, please accept our apology for the inconvenient and let us know about the issue by providing the following information!\n\n\nError Details:\n' + err, 'Mayday, Mayday, Mayday!', false);
    }
}

function removeMenuIdtk(){
	try{
		app.scriptMenuActions.item("☢ - Robot !   ").remove();
        app.scriptMenuActions.item("∞ - DataN !   ").remove();
	}
	catch(myError){}
	try{
		app.menus.item("$ID/Main").submenus.item("★ IDTK").remove();
	}
	catch(myError){}
}

