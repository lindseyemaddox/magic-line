

$(function () {
    $('#main > li > a').click(function(){
        $('#main > li').removeClass('selected');
        $(this).closest('li').addClass('selected');

    });
});

document.ready(function() {

    var $el, leftPos,tabSelected,
            $tabsNav = $("#main");
    if ($tabsNav.length > 0) {
        var width = $('#main').width();
        $tabsNav.css('width', width + 'px');


        if(!tabSelected) {
            tabSelected = $('#main li:first-child');
            tabSelected.addClass('selected');
        }
        if($('#main li#line').length === 0) {
            $tabsNav.append("<li id='line'></li>");
        }

        $("#main #line").css({
            left: tabSelected.position().left,
            width: tabSelected.width()
        }).data("origLeft", $("#line").position().left);
   
        $("ul#main li").hover(function () {
            $el = $(this);
            width = $el.width();
            $("ul#main li#line").css("width", width);
            leftPos = $el.position().left;
            $("ul#main li#line").css("left", leftPos);

        }, function () {
            $("ul#main li#line").css({
                left: $(".selected").position().left,
                width: $(".selected").width()
            });
        });

    }
});



