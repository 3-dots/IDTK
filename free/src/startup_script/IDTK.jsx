/*
Adobe In-Design Tool-Kit Extension V0.1.2 Beta (free version)
created by mim.Armand @ www.Armand.eu
Plugins website: 3Dots.fr/ID-ToolKit
Release date of this version:
14, July, 2014
 */

#targetengine "session"
var idtkFileToOpen = File('../IDTK/IDTK.jsxbin')

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
	app.doScript(idtkFileToOpen);
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

