var nav = [
    {
        "name":"开始使用",
        "url":"/getting-started/"
    },
    {
        "name":"CSS 扩展",
        "url":"/css/"
    },
    {
        "name":"展示扩展",
        "url":"/shows/"
    },
    {
        "name":"功能扩展",
        "url":"/fun/"
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
];
new Vue({
    el: '#cssNav',
    data:{
        nav:cssNav
    }
});
