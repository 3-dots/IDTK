/*
Adobe In-Design Tool-Kit Extension V0.1.0 Beta (free version)
created by mim.Armand @ www.Armand.eu
Plugins website: 3Dots.fr/ID-ToolKit
Release date of this version:
9, July, 2014
 */
#target "InDesign";
#targetengine 'MySessionScript';
app.scriptPreferences.version = 8.0;
var mimIDTK_folder = File(app.activeScript).parent;
var mimIDTK = new File(mimIDTK_folder+"/DONT_OPEN_ME.jsxbin");
app.doScript(mimIDTK);