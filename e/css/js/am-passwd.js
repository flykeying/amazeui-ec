$(function(){
    $('#doc-ipt-pwd-1').keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        var pwdid=$('.am-pw-strength')
        if (false == enoughRegex.test($(this).val())) {
            pwdid.removeClass('am-pw-weak');
            pwdid.removeClass('am-pw-medium');
            pwdid.removeClass('am-pw-strong');
            pwdid.addClass('am-pw-defule');
            //密码小于六位的时候，密码强度图片都为灰色
        }
        else if (strongRegex.test($(this).val())) {
            pwdid.removeClass('am-pw-weak');
            pwdid.removeClass('am-pw-medium');
            pwdid.removeClass('am-pw-strong');
            pwdid.addClass('am-pw-strong');
            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
        }
        else if (mediumRegex.test($(this).val())) {
            pwdid.removeClass('am-pw-weak');
            pwdid.removeClass('am-pw-medium');
            pwdid.removeClass('am-pw-strong');
            pwdid.addClass('am-pw-medium');
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
        }
        else {
            pwdid.removeClass('am-pw-weak');
            pwdid.removeClass('am-pw-medium');
            pwdid.removeClass('am-pw-strong');
            pwdid.addClass('am-pw-weak');
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
        }
        return true;
    });
});

