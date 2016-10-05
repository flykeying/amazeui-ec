$(function(){
    //邮箱
    $("#doc-ipt-1").completer({
        separator: "@",
        source: ["163.com", "qq.com", "126.com", "139.com", "gmail.com", "hotmail.com", "icloud.com"]
    });
    //时间
    $("#doc-ipt-2").completer({
        filter: function(val) {
            val = val.replace(/\D/g, "").substr(0, 2);

            if (val) {
                val = parseInt(val, 10) || 0;
                val = val > 23 ? 23 : val < 10 ? "0" + val : val;
            }

            return val;
        },
        separator: ":",
        source: ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]
    });
    //域名
    var $autoCompleteDomain = $("#doc-ipt-3"),
        $autoCompleteGo = $("#doc-ipt-3");
    $autoCompleteDomain.completer({
        complete: function() {
            var url = "http://www." + $autoCompleteDomain.val();

            $autoCompleteGo.attr("href", url);
        },
        separator: ".",
        source: ["com", "net", "org", "co", "io", "me", "cn", "com.cn"]
    });

});
