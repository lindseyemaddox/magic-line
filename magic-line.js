
    $(function(){
        $('#main > li > a').click(function(){
            $('#main > li').removeClass('selected');
            $(this).closest('li').addClass('selected');
        });

        $(document).ready(function(){

            var $el, topPos,
                $tabsNav = $('#main'),
                tabSelected = $('#main li:first-child'),
                $line = $('ul#main li#line');

            if($tabsNav.length > 0) {

                if(!tabSelected) {
                    tabSelected.addClass('selected');
                }
                
                $line.css({
                    top: tabSelected.position().top
                }).data('origTop', $line.position().top);
           
                $('ul#main li').hover(function(){
                    $el = $(this);
                    topPos = $el.position().top;
                    $line.css('top', topPos);

                }, function(){
                    $line.css({
                        top: $('.selected').position().top,
                    });
                });

            }
        });
    });

