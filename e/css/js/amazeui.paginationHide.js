$(function(){
    var tempNum = $(".am-pagination-hide").data("am-pagination-hide").split(',');
    var prevnum = Number(tempNum[0]);
    var nextnum = Number(tempNum[1]);
    var dqnum=parseInt($('.am-pagination-hide .am-active a').text());

    $('.am-pagination-next').before('<li id="wos-pagination-next-more" style="display: none;cursor: pointer"><a>...</a></li>')
    $('.am-pagination-prev').after('<li id="wos-pagination-prev-more"  style="display: none;cursor: pointer"><a>...</a></li>')
    $(".am-pagination li a").each(function(){
        var dq=$(this).text()
        if (dq>dqnum+nextnum){
            $(this).parent("li").hide();
            $('#wos-pagination-next-more').show();
        }
        if (dq<dqnum-prevnum){
            $(this).parent("li").hide();
            $('#wos-pagination-prev-more').show();
        }
    })
    $('#wos-pagination-next-more').click(function(){
        $(".am-pagination li a").each(function(){
            var dq=$(this).text()
            if (dq>dqnum+nextnum){
                $(this).parent("li").show();
            }
        });
        $('#wos-pagination-next-more').hide();
    });
    $('#wos-pagination-prev-more').click(function(){
        $(".am-pagination li a").each(function(){
            var dq=$(this).text()
            if (dq<dqnum-prevnum){
                $(this).parent("li").show();
            }
        });
        $('#wos-pagination-prev-more').hide();
    });
});