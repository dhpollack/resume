function hidesections(exclude_sections) {
    for( var i = 0; i < exclude_sections.length; i++) {
    var html_exclude_tag = $( exclude_sections[i] ).prop("tagName");
        if(html_exclude_tag.charAt(0) == "H") {
            var all_headers_above = ""; 
            var header_level = html_exclude_tag.charAt(1).valueOf();
            for(header_level; header_level >= 1; header_level--) {
                all_headers_above += "H" + header_level;
                if(header_level != 1) {
                    all_headers_above += ", ";
                }
            }
            $( exclude_sections[i] ).nextUntil( all_headers_above ).andSelf().css("display", "none");
        } else {
            $( exclude_sections[i] ).css("display", "none");
        }
    }
}
function makeSortable(sortFlag) {
    if(sortFlag) {
        $( "ul" ).addClass( "resume-uls" );
        $( ".resume-uls").sortable();
        $( "#xp-section").sortable({
            group: "xp-sort-group",
        });
        $( "#resume-sections").sortable({
            group: "sections-sort-group",
        });
    }
}
// This is not a true sort function.  It just moves sections to the top of the div.
function sortxp(sort_xp) {
        for( var i = 0; i < sort_xp.length; i++) {
            $( sort_xp[i] ).prependTo("#xp-section");
        }
}


$(document).ready(function() {
    hidesections(exclude_sections);
    makeSortable(sortFlag);
    sortxp(sort_xp);
});
