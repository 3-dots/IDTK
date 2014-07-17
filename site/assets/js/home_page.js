jQuery(document).ready(function($) {
    var mainPageSections = [$("#idtk-what"), $("#idtk-how"), $("#idtk-why"), $("#idtk-who"), $("#idtk-where"), $("#idtk-when"), $("#idtk-wow")];
    var topMenuItems = [$('#topMenu01'), $('#topMenu02'), $('#topMenu03'), $('#topMenu04'), $('#topMenu05'), $('#topMenu06'), $('#topMenu07')];
    mainPageSections.forEach(function(element, index) {
        $(element).waypoint(function() {
            // console.log(mainPageSections[index].selector);
            topMenuFx(index);
        })
    })
    $('#idtk-who').waypoint(function() {});
    

    function topMenuFx(activeIndex) {
        topMenuItems.forEach(function(element) {
            $(element).removeClass('active');
        })
        topMenuItems[activeIndex].addClass('active');
        // for( var i = topMenuItems.length-1; i >= 0; i--){
        // 	topMenuItems[i].css('background-color', 'red');
        // }
    }
})