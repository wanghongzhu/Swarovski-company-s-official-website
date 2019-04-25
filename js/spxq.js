$(function () {
    var date = [{
            name: "Lifelong Bow 穿孔耳环  白色  混搭多种镀层",
            imgsrc: "upload/index1.jpg",
            price: "¥ 1590.00",
            des: "耳环",
            index: 0
        },
        {
            name: "Lifelong Bow 阔手镯  白色  混搭多种镀层",
            imgsrc: "upload/index2.jpg",
            price: "¥ 2290.00",
            des: "手镯",
            index: 1
        },
        {
            name: "Lifelong Bow 链坠  白色  混搭多种镀层",
            imgsrc: "upload/index3.jpg",
            price: "¥ 2290.00",
            des: "项链",
            index: 2
        },
        {
            name: "Lifelong Bow Y形项链  白色 混搭多种镀层",
            imgsrc: "upload/index4.jpg",
            price: "¥ 2290.00",
            des: "项链",
            index: 3
        },
        {
            name: "Lifelong Bow 双环戒指 白色 混搭多种镀层",
            imgsrc: "upload/index5.jpg",
            price: "¥ 2290.00",
            des: "戒指",
            index: 4
        },
        {
            name: "Lifelong Medium Bow 手表 白色 混搭多种镀层",
            imgsrc: "upload/index6.jpg",
            price: "¥ 2290.00",
            des: "手表",
            index: 5
        },
        {
            name: "Lucky Goddess Wings 项链 彩色设计 镀金色",
            imgsrc: "upload/index7.jpg",
            price: "¥ 1290.00",
            des: "项链",
            index: 6
        },
        {
            name: "Luckily 穿孔耳环 彩色设计 镀金色",
            imgsrc: "upload/index8.jpg",
            price: "¥ 590.00",
            des: "耳环",
            index: 7
        },
        {
            name: "Oxygen 穿孔耳环 绿色 镀白金色",
            imgsrc: "upload/index9.jpg",
            price: "¥ 690.00",
            des: "耳环",
            index: 8
        },
        {
            name: "Out of this World Queen 项链 白色 混搭多种镀层",
            imgsrc: "upload/index10.jpg",
            price: "¥ 2290.00",
            des: "项链",
            index: 9
        },
        {
            name: "Out of this World Space 穿孔耳环 彩色设计 混搭多种镀层",
            imgsrc: "upload/index11.jpg",
            price: "¥ 2290.00",
            des: "耳环",
            index: 10
        },
        {
            name: "Out of this World Space Y形项链 彩色设计 混搭多种镀层",
            imgsrc: "upload/index4.jpg",
            price: "¥ 2290.00",
            des: "项链",
            index: 11
        }
    ];
    var message = localStorage.getItem('xqymxx');
    var msrc;
    var name;
    var price;
    if (message != null) {
        for (var i = 0; i < date.length; i++) {
            if (message.indexOf(date[i].name) != -1) {
                msrc = date[i].imgsrc;
                name = date[i].name;
                price = date[i].price;
                break;
            }
        }
        $('.wz img').attr('src', msrc);
        $('.tleft-ul li').eq(0).find('img').attr('src', msrc);
        $('.tleft-ul li').eq(1).find('img').attr('src', 'upload/index2.jpg');
        $('.tleft-ul li').eq(2).find('img').attr('src', 'upload/index6.jpg');
        $('.tleft-ul li').eq(3).find('img').attr('src', 'upload/index8.jpg');
        $('.wz img').attr('srcset', msrc + ' ' + 480 + 'w' + ',' + msrc + ' ' + 1200 + 'w' + ',' + msrc + ' ' + 2000 + 'w');
        $('.wz').next('a').attr('href', msrc);
        $('.t-right>p').text(name);
        $('.t-right>h2').text(price);
    } else {
        msrc = 'upload/index4.jpg';
        $('.wz img').attr('src', msrc);
        $('.tleft-ul img').attr('src', msrc);
        $('.wz img').attr('srcset', msrc + ' ' + 480 + 'w' + ',' + msrc + ' ' + 1200 + 'w' + ',' + msrc + ' ' + 2000 + 'w');
        $('.wz').next('a').attr('href', msrc);
    }
    //大图和小图切换 
    $('.t-left .tleft-ul li ').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var wocao = $(this).find('img').attr('src');
        $('.wz img').attr('src', wocao);
        $('.wz img').attr('srcset', wocao + ' ' + 480 + 'w' + ',' + wocao + ' ' + 1200 + 'w' + ',' + wocao + ' ' + 2000 + 'w');



    });


    //购物车的加减
    $('.add').click(function () {

        var $txt = $(this).prev();
        var count = Number($txt.val()) + 1;
        $txt.val(count);
    });

    $('.reduce').click(function () {

        var $red = $(this).next();
        var count1 = Number($red.val()) - 1;
        if (count1 <= 1) {
            count1 = 1;
            $(this).addClass('disabled');
        }
        //重新设置给文本框
        $red.val(count1);
    });

    //红心点亮
    var flag = true;
    $('.icon-shoucang ').click(function () {
        if (flag) {
            $('.icon-shoucang').attr('title', '已收藏');
            $('.icon-shoucang').css('color', 'red');
            flag = false;
        } else {
            $('.icon-shoucang').attr('title', '取消收藏');
            $('.icon-shoucang').css('color', '#000');
            flag = true;
        }

    });
    $(window).scroll(function () {
        var v = $(window).scrollTop();
        if (v > 1000) {
            $('.totop').show();
        } else {
            $('.totop').hide();
        }

    })

    $('.jiaru').click(function () {
        if (localStorage.getItem('userNameShow') == null) {
            var islogin = confirm('请先登录后再查询购物车');
            if (islogin) {
                location.href = 'login.html'
            } else {
                return false;
            }
        } else {
            localStorage.setItem('count', $('.jj .count').val());
            location.href = 'shopcar.html'


        }
    })

});