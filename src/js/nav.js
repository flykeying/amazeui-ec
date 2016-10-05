var nav = [
    {
        "name":"开始使用",
        "url":"../getting-started/"
    },
    {
        "name":"页面组件",
        "url":"../css/"
    },
    // {
    //     "name":"产品展示",
    //     "url":"../shows/"
    // },
    {
        "name":"功能组件",
        "url":"../fun/"
    }
];
new Vue({
    el: 'nav',
    data:{
        nav:nav
    }
});

//fun 功能扩展子目录
var funNav = [
    {
        "name":"有序列表",
        "url":"OrderedList.html"
    },
    {
        "name":"预加载搜索框",
        "url":"pre-search.html"
    },
    {
        "name":"购物车",
        "url":"buycar.html"
    },
    {
        "name":"数量选择控件",
        "url":"selectNum.html"
    }
];
new Vue({
    el: '#funNav',
    data:{
        nav:funNav
    }
});
//
var GSNav = [
    {
        "name":"与AmazeUI关系",
        "url":"amazeui.html"
    },
    {
        "name":"使用方法",
        "url":"use.html"
    }
];
new Vue({
    el: '#menuGS',
    data:{
        nav:GSNav
    }
});
var cssNav = [
    {
        "name":"赞按钮",
        "url":"zan.html"
    },
    {
        "name":"基础搜索框",
        "url":"search.html"
    },
    {
        "name":"手机展示",
        "url":"mobile.html"
    },
    {
        "name":"透明页头",
        "url":"headerAlpha.html"
    },
    {
        "name":"密码强度检测",
        "url":"pwdCheck.html"
    },
    {
        "name":"步骤条",
        "url":"steps.html"
    },
    {
        "name":"隐藏式分页",
        "url":"pagination.html"
    },
    {
        "name":"自动补全插件",
        "url":"completer.html"
    }
];
new Vue({
    el: '#cssNav',
    data:{
        nav:cssNav
    }
});
// var menuShows = [
//     {
//         "name":"未知",
//         "url":"#"
//     }
// ];
// new Vue({
//     el: '#menuShows',
//     data:{
//         nav:menuShows
//     }
// });

